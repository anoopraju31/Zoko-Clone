import './caseCard.css'

const CaseCard = ({title, content, caseStudyImg}) => {
    return (
        <div className='caseCard'>
            <div className="caseCard__img">
                <img src={caseStudyImg} alt="" />
            </div>

            <div className="caseCard__content">
                <h4> {title} </h4>
                <p> {content} </p>
                <p className='last button_stretch'> View Project Details </p>
            </div>
        </div>
    )
}

export default CaseCard