/**
 * Created by maksalizm on 2016. 11. 17..
 */
const React = require('react')
// const ReactRouter = require('react-router')
const Layout = require('./Layout')
const { Router, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure') // shim for node.js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        require.ensure([], (error) => {
          cb(null, require('./Landing'))
        })
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

// const myRoutes = () => (
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Landing}/>
//     <Route path='/search' component={Search} />
//     <Route path='/details/:id' component={Details} />
//   </Route>
// )

const App = React.createClass ({

  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
