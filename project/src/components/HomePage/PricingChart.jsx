import './index.scss'
import stroke from '../../assets/img/small-stroke.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import powerLifting from '../../assets/img/power-lifting-bg.jpg';
import noDaysOff from '../../assets/img/no-days-off.png';
import { useNavigate } from 'react-router-dom';


function PricingChart(props) {

    const priceDict = [
        {
            name: 'Beginner',
            price: '39.95',
            services: ['Free Hand', 'Gym Fitness', 'Weight Loss', 'Personal Trainer', 'Cycling']
        }, {
            name: 'Advanced',
            price: '59.99',
            services: ['Free Hand', 'Gym Fitness', 'Weight Loss', 'Personal Trainer', 'Cycling']
        }, {
            name: 'Pro +',
            price: '99.99',
            services: ['Free Hand', 'Gym Fitness', 'Weight Loss', 'Personal Trainer', 'Cycling']
        },
    ]

    const marginClass = props.marginClass;
    const navigate = useNavigate();

    const handlePurchaseButton = () => {
        navigate('/contact')
    }

    return (
        <div className={`pricing-section ${marginClass}`}>
            <img className='no-days-off' src={noDaysOff} alt="" />
            <div className='stroke'>
                <p>PRICING CHART</p>
                <img src={stroke} alt="" />
            </div>
            <h2>Exlusive Pricing Plan</h2>
            <p>We Have An Offer For Every Person And Every Wallet Girth</p>
            <div className="price-grid-container">
                {priceDict.map((item) => {
                    return (
                        <div className="price-item">
                            <div className="img-container">
                                <img src={powerLifting} alt="" />
                            </div>
                            <div className="price-description-container">
                                <h3>{item.name}</h3>
                                <h4><span>$</span>{item.price} <span>p/m</span></h4>
                                {item.services.map((service) => {
                                    return (
                                        <p>{service}</p>
                                    )
                                })}
                                <button className="primary-button" onClick={handlePurchaseButton}>
                                    PURCHASE NOW&nbsp; &nbsp;
                                    <FontAwesomeIcon className='arrow-right' icon={faArrowRight} color='#fff'/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
    )
}

export default PricingChart;