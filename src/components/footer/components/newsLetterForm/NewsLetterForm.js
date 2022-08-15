import { Button } from '../../../import'
import './newsLetterForm.css'

const NewsLetterForm = () => {
  return (
    <div className='newsLetterForm'>
        <input type="email" placeholder='Your Email' />
        <Button  className='button' text='subscribe' />
    </div>
  )
}

export default NewsLetterForm