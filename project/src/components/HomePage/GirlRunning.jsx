import './index.scss'
import girl from '../../assets/img/girl-run.png';
import girlBg from '../../assets/img/girl-bg..svg';
import girlBgText from '../../assets/img/girl-bg-text.png';
import stroke from '../../assets/img/small-stroke.svg';
import weightLifter from '../../assets/img/weight-lifter.png';
import machines from '../../assets/img/machines.png';
import equipment from '../../assets/img/equipment.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function GirlRunning(props){

    let [url, setUrl] = useState('') 

    const marginClass = props.marginClass
    const content = props.content

    useEffect(() => {
        setUrl(window.location.pathname);
    }, []);

    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/contact');
    }

    return (
        <div className={`girl-sub-section ${marginClass}`}>
            <div className="about-us">
                <div className="stroke about-us-stroke">
                    <p>WHO WE ARE</p>
                    <img src={stroke} alt="" />
                </div>
                <h1>Take Your Health And Body To Next Level</h1>
                <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className="our-benefits">
                    <div className="benefit">
                        <img src={weightLifter} alt="" />
                        <p>PROFESSIONAL TRAINTERS</p>
                    </div>
                    <div className="benefit">
                        <img src={equipment} alt="" />
                        <p>MODERN EQUIPMENT</p>
                    </div>
                    <div className="benefit">
                        <img src={machines} alt="" />
                        <p>FANCY GYM MACHINES</p>
                    </div>
                </div>
                <button className='primary-button' onClick={handleContact}>
                    {url==='/about' ? `${content}` : 'TAKE A TOUR'} &nbsp; &nbsp;
                    <FontAwesomeIcon className='arrow-right' icon={faArrowRight} color='#fff'/>
                </button>
            </div>
            <div className="girl-img-container">
                <img src={girl} alt="" className="girl" />
                <img src={girlBgText} alt="" className="girl-bg-text" />
                <img src={girlBg} alt="" className="girl-bg" />
            </div>
        </div>
    )
}
export default GirlRunning;