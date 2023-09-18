import './index.scss'

import progresion from '../../assets/img/progresion.png';
import workOut from '../../assets/img/workout.png';
import nutrition from '../../assets/img/nutrition.png';
import progressionBg from '../../assets/img/progression-bg.jpg';
import nutritionBg from '../../assets/img/nutrition-bg.webp';
import workOutBg from '../../assets/img/workout-bg.jpg';

import GirlRunning from './GirlRunning';


function AboutUs(){
    return (
        <div className='info-about-us'>
                <div className='grid-container'>
                    <div className='grid-element'>
                        <img src={progresion} alt="" />
                        <h1>Progression</h1>
                        <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                        <img className='bg' src={progressionBg} alt="" />
                    </div>
                    <div className='grid-element'>  
                        <img src={workOut} alt="" />
                        <h1>Workout</h1>
                        <p>With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</p>
                        <img className='bg' src={workOutBg} alt="" />
                    </div>
                    <div className='grid-element'>    
                        <img src={nutrition} alt="" />
                        <h1>Nutrition</h1>
                        <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
                        <img className='bg' src={nutritionBg} alt="" />
                    </div>
                </div>

                <GirlRunning />
        </div>
    )
}
export default AboutUs;