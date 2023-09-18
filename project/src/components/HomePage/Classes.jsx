import stroke from '../../assets/img/small-stroke.svg';
import cyclingBg from '../../assets/img/cycling-bg.jpg';
import jiuDjitsu from '../../assets/img/jiu-djitsu.jpg';
import powerLifting from '../../assets/img/power-lifting-bg.jpg';
import yogaBg from '../../assets/img/yoga-bg.jpg';
import boxingBg from '../../assets/img/boxing-bg.jpg';
import crossFitBg from '../../assets/img/cross-fit-bg.jpg';
import cycling from '../../assets/img/cycling.png';
import martialArts from '../../assets/img/martial-arts.png';
import yoga from '../../assets/img/yoga.png';
import powerLiftingIcon from '../../assets/img/power-lifting.png';
import boxing from '../../assets/img/box.png';
import crossFit from '../../assets/img/cross-fit.png';

import './index.scss';

function Classes(props){

    const marginClass = props.marginClass
    
    return (
        <>
            <div className={`our-classes-section ${marginClass}`}>
                <div className="stroke our-classes">
                    <p>OUR CLASSES</p>
                    <img src={stroke} alt="" />
                </div>
                <h1>We Are Offering Best Flexible Classes</h1>

                <div className="classes-grid-container">
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-img' src={cyclingBg} alt="" />
                        <img className='sport-icon' src={cycling} alt="" />
                        <h3>Cycling</h3>
                        <p>Wednesday: 9:00am-10:00am</p>
                    </div>
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-icon' src={martialArts} alt="" />
                        <img className='sport-img' src={jiuDjitsu} alt="" />
                        <h3>Jiu-Djitsu</h3>
                        <p>Friday: 1:00pm-2:00pm</p>
                    </div>
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-icon' src={powerLiftingIcon} alt="" />
                        <img className='sport-img' src={powerLifting} alt="" />
                        <h3>Power Lifting</h3>
                        <p>Sunday: 6:00pm-7:00pm</p>
                    </div>
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-icon' src={boxing} alt="" />
                        <img className='sport-img' src={boxingBg} alt="" />
                        <h3>Boxing</h3>
                        <p>Monday: 4:00pm-5:00pm</p>
                    </div>
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-icon' src={yoga} alt="" />
                        <img className='sport-img' src={yogaBg} alt="" />
                        <h3>Yoga</h3>
                        <p>Friday: 10:00am-11:00am</p>
                    </div>
                    <div className='classes-element'>
                        <div></div>
                        <img className='sport-icon' src={crossFit} alt="" />
                        <img className='sport-img' src={crossFitBg} alt="" />
                        <h3>Cross Fit</h3>
                        <p>Saturday: 9:00am-10:00am</p>
                    </div>
                </div>
            </div>   
        </>
    )
}
export default Classes;