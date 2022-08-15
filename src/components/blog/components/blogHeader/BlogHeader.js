import './blogHeader.css'
import shape1 from '../../../../img/shape1.png'
import shape3 from '../../../../img/shape3.png'
import shape4 from '../../../../img/shape4.png'
import shape5 from '../../../../img/shape5.png'
import shape6 from '../../../../img/shape6.png'
import { Link } from 'react-router-dom'

const BlogHeader = ({title}) => {
    return (
        <div className='blogHeader'>
            <h2> {title} </h2>
            <div className="blogHeader__nav">
                <p>  <Link to='/'> Home </Link> </p>
                <div className="box"></div>
                <p className='active'> {title} </p>
            </div>
            <div className="shape_container">
                <div className="shape1">
                    <img src={shape1} alt="" />
                </div>

                <div className="shape3">
                    <img src={shape3} alt="" />
                </div>
                
                <div className="shape4">
                    <img src={shape4} alt="" />
                </div>
                
                <div className="shape5">
                    <img src={shape5} alt="" />
                </div>
                
                <div className="shape6">
                    <img src={shape6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BlogHeader