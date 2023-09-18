// Images
import stroke from '../../assets/img/small-stroke.svg';
import powerLifting from '../../assets/img/power-lifting-bg.jpg';
import bottle from '../../assets/img/water-bottle.png';
import modernEquipment from '../../assets/img/modern-equipment.png';
import freeTraining from '../../assets/img/free-training.png';
import gymBag from '../../assets/img/gym-bag.png';
import bigStroke from '../../assets/img/big-stroke.png';
import johnDoe from '../../assets/img/john-doe.png';
import annaGreen from '../../assets/img/anna-green.png';
import johnLewis from '../../assets/img/john-lewis.png';



// Other Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, 
    faEnvelope, 
    faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

//Components
import AboutUs from './AboutUs';
import PricingChart from './PricingChart';
import TestemonialsBmiCalculator from './TestemonialsBmiCalculator';

// Component Styles
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Classes from './Classes';

function Home(){
    const navigate = useNavigate()
    const handleJoin = () => {
        navigate('/contact');
    }
    const handleClasses = () => {
        navigate('/classes')
    }
    return (
        <>
            <div className='hero'>
                <div className='hero-text'>
                    <div className="stroke hero-stroke">
                        <p>FIND YOUR ENERGY</p>
                        <img src={stroke} alt="" />
                    </div>
                    <h1>MAKE YOUR BODY</h1>
                    <h3>FIT & HEALTHY</h3>
                    <button className='primary-button hero-btn' onClick={handleClasses}>
                        OUR CLASSES &nbsp; &nbsp;
                        <FontAwesomeIcon className='arrow-right' icon={faArrowRight} color='#FF0034'/>
                    </button>
                </div>
                <div className='share-tag'>
                    <p>SHARE</p>
                    <span></span>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>

            </div>
            
            <AboutUs />
            
            <Classes />
            <div className='video-trainers-section'>
                <div className='video-header-container'>
                    <h2>We Will Provide You With The Best Fitness Service You Could Ever Imagine</h2>
                    <button className='primary-button video-cont-btn' onClick={handleJoin}>
                        JOIN US &nbsp; &nbsp;
                        <FontAwesomeIcon className='arrow-right' icon={faArrowRight} color='#FF0034'/>
                    </button>
                </div>
                <div className='video-bg'>
                    <div className="video-container">
                        <img className='video' src={powerLifting} alt="" />
                    </div>
                    <div className="description-container">
                        <div className='stroke why-us'>
                            <p>WHY CHOOSE US</p>
                            <img src={stroke} alt="" />
                        </div>
                        <h3>We Can Give A Shape To Your Body Here!</h3>
                        <div className='reasons-container'>
                            <p className='reasons'>At GymBro, we are dedicated to help you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                        </div>
                        <div className='icon-description-container'>
                            <div className="icon-description">
                                <img src={freeTraining} alt="" />
                                <p>Free Fitness Training</p>
                            </div>
                            <div className="icon-description">
                                <img src={modernEquipment} alt="" />
                                <p>Awesome Equipment</p>
                            </div>
                            <div className="icon-description">
                                <img src={gymBag} alt="" />
                                <p>Cool Gym Bag</p>
                            </div>
                            <div className="icon-description">
                                <img src={bottle} alt="" />
                                <p>Free Bottle of Water</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trainers-container">
                    <div className='stroke why-us'>
                        <p>OUR TRAINERS</p>
                        <img src={stroke} alt="" />
                    </div>
                    <h3>Team Of Expert Coaches</h3>
                    <p>Expert team of coaches helps you succeed in any goal,</p> 
                    <p>personalized guidance and motivation provided!</p>
                    <div className="trainers-grid-container">
                        <div className="trainer-card">
                            <div className="trainer-img-container">
                                <img className='bg-stroke' src={bigStroke} alt="" />
                                <img className='trainer-img'src={johnDoe} alt="" />
                                <FontAwesomeIcon icon={faArrowUp} color='#000' />
                            </div>
                            <h4>John Lewis</h4>
                            <p>Yoga Trainer</p>
                            <div className="socials-container">
                                <FontAwesomeIcon icon={faFacebook} color='#FF0034'/>
                                <FontAwesomeIcon icon={faInstagram} color='#FF0034'/>
                                <FontAwesomeIcon icon={faLinkedin} color='#FF0034'/>
                                <FontAwesomeIcon icon={faEnvelope} color='#FF0034'/>
                            </div>
                            <div className="under-line"></div>
                        </div>
                        <div className="trainer-card">
                            <div className="trainer-img-container">
                                <img className='bg-stroke' src={bigStroke} alt="" />
                                <img className='trainer-img'src={johnLewis} alt="" />
                                <FontAwesomeIcon icon={faArrowUp} color='#000' />
                            </div>
                            <h4>John Doe</h4>
                            <p>Cross Fit Trainer</p>
                            <div className="socials-container">
                                <FontAwesomeIcon icon={faFacebook} color='#FF0034'/>
                                <FontAwesomeIcon icon={faInstagram} color='#FF0034'/>
                                <FontAwesomeIcon icon={faLinkedin} color='#FF0034'/>
                                <FontAwesomeIcon icon={faEnvelope} color='#FF0034'/>
                            </div>
                            <div className="under-line"></div>
                        </div>
                        <div className="trainer-card">
                            <div className="trainer-img-container">
                                <img className='bg-stroke' src={bigStroke} alt="" />
                                <img className='trainer-img'src={annaGreen} alt="" />
                                <FontAwesomeIcon icon={faArrowUp} color='#000' />
                            </div>
                            <h4>Anna Green</h4>
                            <p>Fitness Trainer</p>
                            <div className="socials-container">
                                <FontAwesomeIcon icon={faFacebook} color='#FF0034'/>
                                <FontAwesomeIcon icon={faInstagram} color='#FF0034'/>
                                <FontAwesomeIcon icon={faLinkedin} color='#FF0034'/>
                                <FontAwesomeIcon icon={faEnvelope} color='#FF0034'/>
                            </div>
                            <div className="under-line"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <TestemonialsBmiCalculator />

            <PricingChart />
        </>
    )
}
export default Home;