import './solutionDetail.css'
import { BlogHeader } from '../blog/components/import'
import { solutionsDetails } from './util'
import { useParams } from 'react-router-dom';

const SolutionDetail = ({contents}) => {
    const  {userId} = useParams();
    console.log(userId);
    return (
        <div>
            <BlogHeader title='Case Studies' />
            <div className="solutionDetail container">
                <div className="solutionDetail_bannerImg">
                    <img src={solutionsDetails[userId].img1} alt="" />
                    <img src={solutionsDetails[userId].img2} alt="" />
                </div>

                <div className="solutionDetail_body">
                    <h2> {solutionsDetails[userId].title} </h2>
                    {
                        solutionsDetails[userId].content.map((c, idx) => <p key={idx}> {c} </p>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SolutionDetail