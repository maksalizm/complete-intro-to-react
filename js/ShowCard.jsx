const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <Link to={`/details/${props.imdbID}`} >
    <div className='show-card'>
      <img src={'public/img/posters/' + props.poster} className='show-card-img'/>
      {/*<img src={'public/img/posters/${show.poster}'} className='show-img'/>*/}
      <div className='show-card-text'>
        <h3 className='show-card-title'>
          {props.title}
          {/*> {props.prop}*/}
        </h3>
        <h4 className='show-card-year'>
          ({props.year})
        </h4>
        <p className='show-card-description'>
          {props.description}
        </p>
      </div>
    </div>
  </Link>
)

{/*<Link to={`details/${props.params.id}`} >*/}

const { string } = React.PropTypes
// const string = React.PropTypes.string
ShowCard.propTypes = {
  show: React.PropTypes.object.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard
