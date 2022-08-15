import './blogPointer.css'
import { useSelector, useDispatch } from 'react-redux'
import { inputBlogPage } from '../../../../features/blogPage/blogPage'

const BlogPointer = ({Icon, num, inc}) => {
    const blogPage = useSelector(state => state.blogPage.value)
    const dispatch = useDispatch()
    const handleClick = () => {
        let curPage

        if (num)
            dispatch(inputBlogPage(num))
        else {
            if (inc) 
                curPage = blogPage <= 2? blogPage + 1 : 3
            else
                curPage = blogPage >= 2? blogPage - 1 : 1

            dispatch(inputBlogPage(curPage))
        }
    }

    return (
        <div 
            className={`blogPointer ${num === blogPage? 'active' : ''}`}
            onClick={handleClick}
        >
            {num && <p> {num} </p>}
            {Icon && Icon}
        </div>
    )
}

export default BlogPointer