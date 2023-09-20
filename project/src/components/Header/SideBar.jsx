import './SideBar.scss';
// import GymBroLogo from '../../assets/img/GymBroLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import {
    faEnvelope,
    faLocationPin,
    faPhone
} from '@fortawesome/free-solid-svg-icons';

function SideBar() {
    return (
        <>
            {/* <div className="side-logo-container">
                <img src={GymBroLogo} />
            </div> */}
            <div className="about-us-text-container">
                <h2>About Us</h2>
                <p>Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>
            </div>
            <div className="contact-info-container">
                <h2>Contact Info</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <p>Wawelska 87, Warszawa</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+48 800 900 369</p>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>gymbro@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div className="follow-us-container">
                <h2>Follow Us</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
            </div>
        </>
    )
}
export default SideBar;