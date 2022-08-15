import './memberCard.css'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const MemberCard = ({name, position, img}) => {
    return (
        <div className='memberCard'>
            <div className="memberCard__img">
                <img src={img} alt="" />
                <div className="memberCard__socialMedia">
                    <div className="icon">
                        <AiFillLinkedin size={18} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={18} />
                    </div>
                    <div className="icon">
                        <AiOutlineTwitter size={18} />
                    </div>
                    <div className="icon">
                        <IoMdMail size={18} />
                    </div>
                </div>
            </div>


            <div className="memberCard__content">
                <h4> {name} </h4>
                <p> {position} </p>
            </div>
        </div>
    )
}

export default MemberCard