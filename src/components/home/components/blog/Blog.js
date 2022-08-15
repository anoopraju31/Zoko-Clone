import './blog.css'
import BlogCard from './components/blogCard/BlogCard'
import { blogDetails } from './utill'

const Blog = () => {
  return (
    <div className='blog container'>
        <div className="blog__header">
            <p className='first'> Blog Post </p>
            <h2> Our Regular Blogs </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta. </p>
        </div>

        <div className="blog__container">
            {
              blogDetails.map(({title, date, author, img, content}, idx) => <BlogCard key={idx} title={title} date={date} author={author} img={img} content={content} />)
            }
        </div>

        <div className="blog__footer">
            <p> We Have More Usefull Blogs For You. <span> View More </span> </p>
        </div>
    </div>
  )
}

export default Blog