import './teamMemberCard.css'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const TeamMemberCard = ({name, position, img}) => {
    return (
        <div className='teamMemeberCard'>
            <div className="teamMemberCard_img">
                <img src={img} alt="" />
            </div>
            
            <div className="teamMemeberCard_content">
                <h3> {name} </h3>
                <p> {position} </p>
            </div>

            <div className="teamMemberCard_socialMediaContainer">
                <div className="icon">
                    <AiFillLinkedin size={14} />
                </div>
                <div className="icon">
                    <FaFacebookF size={14} />
                </div>
                <div className="icon">
                    <AiOutlineTwitter size={14} />
                </div>
                <div className="icon">
                    <IoMdMail size={14} />
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard