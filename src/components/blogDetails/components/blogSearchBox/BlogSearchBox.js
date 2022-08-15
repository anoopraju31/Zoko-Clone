import './blogSearchBox.css'
import { BiSearch } from 'react-icons/bi'

const BlogSearchBox = () => {
    return (
        <div className='blogSearchBox'>
            <input placeholder="search..." name="" id="" />
            <button className="blogSearchBox_icon">
                <BiSearch size={20} />
            </button>
      </div>
    )
}

export default BlogSearchBox