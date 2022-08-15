import { Button } from '../../../import'
import { PriceSphere, Verified } from '../import'
import './priceCard.css'

const PriceCard = ({period, price, features, popular}) => {
    return (
        <div className='priceCard'>
            <h3> {period} </h3>
            <p> Build A Website </p>
            {popular && <div className="popular"> Popular </div> }
            <PriceSphere price={price} />
            <div className="plan_features">
                {
                    features.map((feature, idx) => <Verified key={idx} feature={feature} />)
                }
            </div>
            <Button text='get Started' pseudoElementColor />
        </div>
    )
}

export default PriceCard