import './verified.css'
import { MdVerified } from 'react-icons/md'

const Verifed = ({feature}) => {
  return (
    <div className='verified'>
        <span className='icon'> <MdVerified /> </span> 
        { feature}
    </div>
  )
}

export default Verifed