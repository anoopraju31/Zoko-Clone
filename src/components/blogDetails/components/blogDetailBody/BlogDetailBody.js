import './blogDetailBody.css'
import img1 from '../../../../img/blog-details.jpg'
import img2 from '../../../../img/blog1.jpg'
import img3 from '../../../../img/blog5.jpg'
import img4 from '../../../../img/blog4.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import BlogDetailSideBarHead from '../blogDetailSideBarHead/BlogDetailSideBarHead'
import { BlogSearchBox, BlogTags } from '../import'

const BlogDetailBody = () => {
    return (
        <div className='blogDetailBody container'>
            <div className="blogBody">
                <div className="blogBody_img">
                    <img src={img1} alt="" />
                    <p> 
                        <span> Posted On: </span> 
                        May 19, 2020
                        <span> -- Posted By: </span>
                        John Anderson
                    </p>
                </div>
                
                <div className="blog_content">
                    <h2> Temperature App UX Studies & Development Case </h2>
                    <p> Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit, consectetur qui ratione voluptatem sequi nesciunt magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat labore et dolore magna aliqua. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat consectetur adipisicing onsectetur adipisicing. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ullamco laboris nisi ut aliquip ex. </p>
                    
                    <div className="blog_content_img">
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ullamco laboris nisi ut aliquip ex. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ullamco laboris nisi ut aliquip ex. </p>
                </div>

                <div className="blog_nav">
                    <div className="blog_nav_link">
                        <a href="/blog-details">
                            <AiOutlineArrowLeft className='icon' size={18} />
                            Prev Post
                        </a>
                    </div>

                    <div className="blog_nav_link">
                        <a href="/blog-details">
                            Next Post
                            <AiOutlineArrowRight className='icon' size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="blogBodySideBar">
                <div className="sideCard">
                    <BlogDetailSideBarHead title='Search Now' />
                    
                    <div className="sideCard_box">
                        <BlogSearchBox />
                    </div>
                </div>

                <div className="sideCard">
                    <BlogDetailSideBarHead title='Tags' />
                    
                    <div className="sideCard_box">
                        <BlogTags title='Business' count={3}/>
                        <BlogTags title='Privacy' count={3}/>
                        <BlogTags title='Technology' count={2}/>
                        <BlogTags title='Tips' count={2}/>
                        <BlogTags title='Uncategorized' count={1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailBody