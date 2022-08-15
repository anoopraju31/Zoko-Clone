import './solutions.css'
import { BlogHeader } from '../blog/components/import'
import { ServiceSection } from '../home/components/import'

const Solutions = () => {
  return (
    <div className='solutions'>
        <BlogHeader title='Services' />
        <ServiceSection />
    </div>
  )
}

export default Solutions