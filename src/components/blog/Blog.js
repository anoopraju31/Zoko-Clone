import './blog.css'
import { BlogContainer, BlogHeader } from './components/import'

const Blog = () => {
    return (
        <div className='blogComponent'>
            <BlogHeader title='Blog' />
            <BlogContainer />
        </div>
    )
}

export default Blog