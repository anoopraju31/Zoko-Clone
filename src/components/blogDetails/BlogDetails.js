import { BlogHeader } from '../blog/components/import'
import './blogDetails.css'
import { BlogDetailBody } from './components/import'

const BlogDetails = () => {
    return (
        <div>
            <BlogHeader title='Blog Details' />
            <BlogDetailBody />
        </div>
    )
}

export default BlogDetails