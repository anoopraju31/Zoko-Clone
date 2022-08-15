import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"
import { MemberCard } from './component/import'
import { team } from './util'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import './teamMember.css'

const TeamMember = () => {
    return (
        <div className='teamMember container'>
            <div className="teamMember__header">
                <p className='first'> Team Members </p>
                <h2> People Who Are Behind The Achievements </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. </p>
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
                        spaceBetween: 10,
                        slidesPerView: 1
                    },
                    560: {
                        spaceBetween: 10,
                        slidesPerView: 2
                    },
                    780: {
                        spaceBetween: 10,
                        slidesPerView: 3
                    },
                    980: {
                        spaceBetween: 16,
                        slidesPerView: 3
                    },
                    1200: {
                        spaceBetween: 16,
                        slidesPerView: 4
                    },
                }}
            >
                { 
                    team.map(({name, position, img}, idx) => <SwiperSlide key={idx}> <MemberCard name={name} position={position} img={img} /> </SwiperSlide> )
                }
            </Swiper>
        </div>
    )
}

export default TeamMember