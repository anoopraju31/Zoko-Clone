import './caseStudy.css'
import { BlogHeader } from '../blog/components/import'
import { CaseStudy as Study } from '../home/components/import'

const CaseStudy = () => {
  return (
    <div>
        <BlogHeader title='Case Studies' />
        <Study />
    </div>
  )
}

export default CaseStudy