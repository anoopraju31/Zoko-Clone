import './testimonialCard.css'

const TestimonialCard = ({img, testimonial, name, position}) => {
  return (
    <div className='testimonialCard'>
        <div className="single-client">
            <img src={img} alt="img"/>
            <p> {testimonial} </p>
            <h2> {name} </h2>
            <span> {position} </span>
        </div>
    </div>
  )
}

export default TestimonialCard