import './card.css'


const Card = ({name, desc, img, path}) => {
  return (
    <div className='card'>
        <div className="card__img">
            <img src={img} alt={img} />
        </div>

        <div className="card__content">
            <h4> {name} </h4>
            <p> {desc} </p>
            <div className="card__readMore"> 
              <a href={`solutions/${path}`}> read more </a>
            </div>
        </div>
    </div>
  )
}

export default Card