import './goTop.css'
import { useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'

const GoTop = () => {
    const [visible, setVisible] = useState(false)
    const handleClick = () =>  window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop

        if (scrolled > 300) setVisible(true)
        else setVisible(false)
    }

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className={`go-top ${visible? 'active' : ''}`} onClick={handleClick}>
            <FaAngleDoubleUp />
        </div>
    )
}

export default GoTop