import './priceSphere.css'

const PriceSphere = ({price}) => {
    return (
        <div className='priceSphere'>
            ${price}
        </div>
    )
}

export default PriceSphere