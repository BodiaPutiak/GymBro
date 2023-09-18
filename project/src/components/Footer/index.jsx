import logo from '../../assets/img/Gymbro_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './index.scss'

function Footer(){
    return(
        <footer>
            <div className="logo-foot">
                <img src={logo} alt="" />
                <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className='socials-div'>
                    <FontAwesomeIcon icon={faFacebook} color='gray'/>
                    <FontAwesomeIcon icon={faInstagram} color='gray'/>
                    <FontAwesomeIcon icon={faLinkedin} color='gray'/>
                </div>
                <h5>Privacy Policy | © 2023 Gymate</h5>
                <h5>Design by RadiusTheme</h5>
            </div>
            <div className="our-classes">
                <h5>Our Classes</h5>
                <ul>
                    <li>Fitness Classes</li>
                    <li>Aerobic Classes</li>
                    <li>Powerlifting Classes</li>
                    <li>Learn Machines</li>
                    <li>Full-Body Strength</li>
                </ul>
            </div>
            <div className="working-hours">
                <h5>Working Hours</h5>
                <h6>Monday - Friday:</h6>
                <p>7:00am - 21:00pm</p>
                <h6>Saturday:</h6>
                <p>7:00am - 19:00pm</p>
                <h6>Sunday -Closed</h6>
            </div>
        </footer>
    )
}
export default Footer;