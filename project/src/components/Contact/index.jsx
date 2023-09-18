import './index.scss';
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
        <>
            <div className="banner">
                <h2>Contact Us</h2>
            </div>
            <div className="flex-container">
                <div className="contact-description">
                    <h1>We are here for help you! To Shape Your Body.</h1>
                    <p>At GymBro, we are dedicated to helping you achieve the body of your dreams. 
                        Our expert trainers and nutritionists will work with you to create a 
                        personalized fitness and nutrition plan that helps you reach your specific goals.
                    </p>
                    <div className="contact-info-grid">
                        <div className="contact-info">
                            <h3>Warsaw, Poland</h3>
                            <p>85 Briston Mint Street,</p>
                            <p>London, E1 8LG, USA</p>
                        </div>
                        <div className="contact-info">
                            <h3>Open Hours</h3>
                            <p>Mon to Fri: 7:30 am — 21:00 pm</p>
                            <p>Saturday: 7:30 am — 19:00 pm</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div className="contact-info">
                            <h3>Information</h3>
                            <p>+48-123-123-0008</p>
                            <p>gymbro@gmail.com</p>
                        </div>
                        <div className="contact-info">
                            <h3>Follow Us On</h3>
                            <div className="socials">
                                <FontAwesomeIcon icon={faFacebook} color='#000'/>
                                <FontAwesomeIcon icon={faInstagram} color='#000'/>
                                <FontAwesomeIcon icon={faLinkedin} color='#000'/>
                                <FontAwesomeIcon icon={faTwitter} color='#000'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form >
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='primary-button' value='SUBMIT NOW' />    
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact