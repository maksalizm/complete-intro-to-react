const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string, arrayOf } = React.PropTypes
const { connector } = require('./Store')

const Search = React.createClass ({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    console.log(this.props.shows)
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)

//
// class Search extends React.Component {
//   constructor (props) {
//     super (props)
//
//     this.handleSearchTerm = this.handleSearchTerm.bind(this)
//   }
//   render () {
//     return (
//       <div className='container'>
//         <header className="header">
//           <h1 className="brand">svideo</h1>
//           <input type="text" className="search-input" placeholder="Search"/>
//         </header>
//         <div className='shows'>
//           {data.shows.map((show) => (
//             <ShowCard {...show} show={show} key={show.imdbID} />
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

