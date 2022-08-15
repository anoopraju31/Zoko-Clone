import { BlogCard } from '../../../home/components/blog/components/import'
import './blogContainer.css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BlogPointer } from '../import'
import { useSelector } from 'react-redux'
import { blogDetails } from './util'
import { useState, useEffect } from 'react'

const BlogContainer = () => {
    const blogPage = useSelector(state => state.blogPage.value)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        let start = blogPage === 1? 0 : (blogPage - 1) * 6 
        let end = blogPage === 1? 6 : blogPage * 6 
        
        setBlogs(blogDetails.slice(start, end))
    }, [blogPage])
    
    return (
        <div className='blogContainer container'>
            <div className="blogContainer__header">
                <p className='first'> Blog Post </p>
                <h2> Our Regular Blogs </h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta. </p>
            </div> 

            <div className="blogContainer__body container">
                {
                    blogs.map(({title, author, date, content, img}, idx) => <BlogCard key={idx} title={title} author={author} date={date} content={content} img={img} />)
                }
            </div> 

            <div className="blogContainer__pointer">
                <BlogPointer Icon={<MdOutlineKeyboardArrowLeft size={18} />} />
                <BlogPointer num={1} />
                <BlogPointer num={2} />
                <BlogPointer num={3} />
                <BlogPointer Icon={<MdOutlineKeyboardArrowRight size={18} />} inc />
            </div>
        </div>
    )
}

export default BlogContainer