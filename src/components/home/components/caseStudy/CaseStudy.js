import './caseStudy.css'
import { CaseCard } from './components/import'
import { caseStudies } from './util'

const CaseStudy = () => {
    return (
        <div className='caseStudy'>
            <div className="caseStudy__header">
                <p className='first'> Case Study </p>
                <h2> Have A Look Our Work Showcase </h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit sapiente! Ipsam sapiente aut exercitationem, consequuntur fugit tempore magni minima? </p>
            </div>

            <div className="caseStudy__container">
                {
                    caseStudies.map(({title, content, img}, idx) => <CaseCard title={title} content={content} key={idx} caseStudyImg={img} />)
                }
            </div>

            <div className="caseStudy__more">
                We Have More Amazing Cases. <span>  View More </span>
            </div>
        </div>
    )
}

export default CaseStudy