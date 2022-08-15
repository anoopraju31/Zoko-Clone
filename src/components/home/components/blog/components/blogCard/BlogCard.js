import './blogCard.css'

const BlogCard = ({title, author, date, content, img}) => {
  return (
    <div className='blogCard'>
        <div className="blogCard__img">
            <img src={img} alt="" />
        </div>

        <div className="blogCard__content">
            <p className='first'> {date} <span className='slash'> | </span> <span className='admin'> {author} </span> </p>
            <h4> {title} </h4>
            <p> {content} </p>
            <div className="blogCard__button button_stretch"> <a href="/blog-details"> Read More </a> </div>
        </div>
    </div>
  )
}

export default BlogCard