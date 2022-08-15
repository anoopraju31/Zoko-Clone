import Choose from '../home/components/choose/Choose'
import { Contact } from '../home/components/import'
import { BlogHeader } from '../blog/components/import'
import './faq.css'

const Faq = () => {
    return (
        <div>
            <BlogHeader title='FAQs' />
            <Choose />
            <Contact showImg />
        </div>
    )
}

export default Faq