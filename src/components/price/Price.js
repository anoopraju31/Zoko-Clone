import './price.css'
import { BlogHeader } from '../blog/components/import'
import { PriceCard } from './component/import'
import { packageFeatures } from './util'

const Price = () => {
    return (
        <div>
            <BlogHeader title='Pricing' />
            <div className="pricingPage container">
                <div className="pricingPage_header">
                    <p className='first'> Blog Post </p>
                    <h2> Our Regular Blogs </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta. </p>
                </div>

                <div className="pricing_container">
                    <PriceCard period='Weekly' price={100} features={packageFeatures[0]} />
                    <PriceCard period='Monthly' price={159} features={packageFeatures[0]} popular />
                    <PriceCard period='Yearly' price={359} features={packageFeatures[0]} />
                </div>
            </div>
        </div>
    )
}

export default Price