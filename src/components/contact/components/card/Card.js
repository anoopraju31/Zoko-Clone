import './card.css'

const Card = ({Icon, title, subTitle}) => {
    return (
        <div className='contactCard'>
            <div className='icon'>
                {Icon}
            </div>
            <div className="contactCard_content">
                <h3> {title} </h3>
                <p> {subTitle} </p>
            </div>
        </div>
    )
}

export default Card