import { AiOutlineSearch } from 'react-icons/ai'
import './searchBox.css'

const SearchBox = () => {
    return (
        <div className='searchBox'>
            <input type="text" placeholder='Search...' />
            <AiOutlineSearch className='searchBox__icon' size={18} />
        </div>
    )
}

export default SearchBox