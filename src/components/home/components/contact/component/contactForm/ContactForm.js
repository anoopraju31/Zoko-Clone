import { Button } from '../../../../../import'
import './contactForm.css'

const ContactForm = ({noShowImg}) => {
    return (
        <div className={noShowImg? 'contactForm2' : 'contactForm'}>
            <form>
                <input type="text" placeholder='your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="text"placeholder='Your Phone' />
                <input type="text"placeholder='Subject' />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="contactForm__button_container">
                    <Button text='Submit' pseudoElementColor link='//' />
                </div>
            </form>
        </div>
    )
}

export default ContactForm