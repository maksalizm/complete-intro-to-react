const React = require('react')
const axios = require('axios')
const Header = require('./Header')
const { connector } = require('./Store')

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.log('axios error', error)
      })
  }

  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }

  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className="video-rating">{this.state.omdbData.imdbRating}</h3>
    }

    return (
      <div className="container">
        <Header />
        <div className="video-info">
          <h1 className="video-title">{title}</h1>
          <h2 className="video-year">({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} alt="poster" className="video-poster"/>
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp=;controls=0&amp;showinfo=0`} frameBorder="0"
          allowFullScreen></iframe>
        </div>
        {/*<pre>*/}
        {/*<code>*/}
        {/*{JSON.stringify(this.props, null, 4)}*/}
        {/*{JSON.stringify(this.props.params, null, 4)}*/}
        {/*</code>*/}
        {/*</pre>*/}
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
}

module.exports = connector(Details)
