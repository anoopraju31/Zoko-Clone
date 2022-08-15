import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"
import TestimonialCard from './components/TestimonialCard/TestimonialCard'
import {testimonials} from './util'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import './testimonials.css'

const Testimonials = () => {
	return (
		<div className="testimonials">
			<div className="container">
				<div className="testimonials_header">
                	<p className='first'> Testimonials </p>
					<h2> What Our Client’s Say </h2>
					<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta. </p>
				</div>

				<Swiper
					className="mySwiper"
					navigation={true}
					modules={[Navigation]}
					loop={true}
					loopFillGroupWithBlank={true}
					// grabCursor={true}
					breakpoints={{
						0: {
							spaceBetween: 16,
							slidesPerView: 1
						},
						980: {
							spaceBetween: 16,
							slidesPerView: 2
						}
					}}
				>
					{
						testimonials.map(({img, testimonial, name, position}, idx) => <SwiperSlide key={idx}> <TestimonialCard key={idx} img={img} testimonial={testimonial} name={name} position={position} /> </SwiperSlide>)
					}
				</Swiper>
			</div>
			
		</div>
  	)
}

export default Testimonials