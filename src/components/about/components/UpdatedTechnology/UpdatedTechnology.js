import './updatedTechnology.css'
import img1 from '../../../../img/choose-img1.jpg'
import { Button } from '../../../import'
import { BsFillPlayFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

const UpdatedTechnology = () => {
    const [playVideo, setPlayVideo] = useState(false)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };


    return (
        <div className="updatedTechnology">
            <div className="container">
                <div className="inner_container">
                    <div className="img_container">
                        <img src={img1} alt="" />
                        <div className="technology_video">
                            <div className="video_btn popup-youtube">
                                <div className="bx" onClick={() => setPlayVideo(true)} >
                                    <BsFillPlayFill className='icon' size={48} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="technology_content">
                        <h2> Updated Technology </h2>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat excepturi tempore odit, in illum iusto eaque qui sit, eum facere, similique aspernatur nihil. Veritatis, nostrum. Cum et dolorem a vel aliquid corporis, illum beatae sed odio hic architecto repellat, voluptas porro obcaecati impedit laudantium quas. Fuga animi totam laboriosam cupiditate. Velit harum itaque asperiores saepe commodi aut totam, aspernatur nulla delectus facilis voluptatum quae aperiam placeat aliquam repudiandae dolorum, doloribus illo recusandae quibusdam consequatur deleniti? Eos, ducimus adipisci, fuga, repellendus atque quaerat ratione illo recusandae sapiente repudiandae neque? Laudantium aliquam alias voluptas ipsam perferendis expedita quibusdam similique illum rerum? </p>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cum eius iusto pariatur consequuntur, ipsam, facilis praesentium necessitatibus excepturi aspernatur placeat dignissimos hic cumque ut quaerat enim temporibus rem odit autem sit recusandae quidem soluta debitis corporis? Laboriosam earum neque iure distinctio, fugiat doloribus dolorem expedita nam inventore, assumenda fuga nostrum dolores ipsam ducimus quidem reprehenderit magni odit natus dolore? </p>
                        <Link to="/contact">
                            <Button text="Contact Us" pseudoElementColor link="/contact" />
                        </Link>
                    </div>
                </div>

                { playVideo && 
                    <div className="modal_video">
                        <div className="modal_video_body">
                            <div className="modal_video_inner">
                                <div class="modal_video_movie_wrap" style={{paddingBottom: '56.25%'}}>
                                    <button className="modal_video_close_btn" onClick={() => setPlayVideo(false)}></button>
                                    <YouTube videoId="bk7McNUjWgw" opts={opts} />
                                </div>  
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default UpdatedTechnology