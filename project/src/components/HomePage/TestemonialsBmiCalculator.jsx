import './index.scss'
import stroke from '../../assets/img/small-stroke.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, 
    faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import quotes from '../../assets/img/quotes.png';
import bmiImg from '../../assets/img/bmi-img.jpg';
import { useState } from 'react';



function TestemonialsBmiCalculator() {

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [bmi, setBmi] = useState('');
    const [verdict, setVerdict] = useState('');
    const [weightInput, setWeightInput] = useState('');
    const [heightInput, setHeightInput] = useState('');

    const [weightRequired, setWeightRequired] = useState(false);
    const [heightRequired, setHeightRequired] = useState(false);

    const testemonialsDict = [{
            id: 1,
            opinion: `“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”`,
            name: 'Harry Potter',
            job: 'CEO of Hogwarts'
        }, {
            id: 2,
            opinion: `“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic reprehenderit debitis quas nobis repellat unde? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nam consectetur distinctio aspernatur, laboriosam error.”`,
            name: 'Bobby Lee',
            job: 'Artist'
        }, {
            id: 3,
            opinion: `“Imagine prisoners in a cave, whose necks and legs are chained so that they can only see in front of them. Behind them is a fire, and between the fire and the prisoners, there is a raised walkway. Objects placed on the walkway cast shadows on the cave wall in front of the prisoners. The prisoners see only the shadows and believe them to be the only reality. If a prisoner were released and forced to turn around and look at the fire and the objects on the walkway, their eyes would be dazzled by the light, and they would have a difficult time adjusting to the new reality. However, as their eyes adjust, they would come to understand that the shadows on the cave wall were mere illusions, and the objects on the walkway were the true reality.”`,
            name: 'Plato',
            job: 'Vice President of Banana Republic'
        }
    ]

    const handleRightButton = () => {
        const nextIndex = (currentTestimonialIndex + 1) % testemonialsDict.length;
        setCurrentTestimonialIndex(nextIndex);
    }

    const handleLeftButton = () => {
        const prevIndex = (currentTestimonialIndex - 1);
        if (prevIndex < 0) {
            setCurrentTestimonialIndex(testemonialsDict.length - 1);
        } else {
            setCurrentTestimonialIndex(prevIndex);

        }
    }

    const handleWeightChange = (event) => {
        setWeightInput(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeightInput(event.target.value);
    };
    

    const handleCalculateButton = () => {
        if (!weightInput) {
            setWeightRequired(true);
            return; 
          }
          if (!heightInput) {
            setHeightRequired(true);
            return; 
          }
        const bmi = (weightInput / (heightInput / 100*heightInput / 100)).toFixed(2);
        if (bmi < 18.5) {
            setVerdict('Under Weight');
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setVerdict('Normal')
        } else if (bmi >= 25 && bmi <= 29.9) {
            setVerdict('Overweight')
        } else if (bmi >= 30 && bmi <= 34.9) {
            setVerdict('OBESE')
        }
        setBmi(bmi);

        setWeightRequired(false);
        setHeightRequired(false);
    }

    return (
        <div className="testemonials-bmicalc-section">
                <div className='stroke testemonials'>
                    <p>TESTEMONIALS</p>
                    <img src={stroke} alt="" />
                </div>
                <div className="testemonials-container">
                    <img src={quotes} alt="" className="quotes" />
                    <p>{testemonialsDict[currentTestimonialIndex].opinion}</p>
                    <h5>{testemonialsDict[currentTestimonialIndex].name}</h5>
                    <h6>{testemonialsDict[currentTestimonialIndex].job}</h6>
                    <div className='button-container'>
                        <button onClick={handleLeftButton}>
                            <FontAwesomeIcon icon={faArrowLeft} color='#000' />
                        </button>
                        <button onClick={handleRightButton}>
                            <FontAwesomeIcon icon={faArrowRight} color='#000' />
                        </button>
                    </div>
                </div>

                <div className="bmi-calculator-container">
                    <div className="bmi-calculator">
                        <h3>Let's Calculate Your <span>BMI</span></h3>
                        <p>Easily determine your body mass index with ourt accurate calculation tool.</p>
                        <div className="bmi-input-container">
                            <div>
                                <input type="number" min='0' value={weightInput} onChange={handleWeightChange} required={weightRequired} placeholder='Weight / kg'/>
                                <h5>Your BMI is: <span>{bmi}</span></h5>
                            </div>
                            <div>
                                <input type="number" min='0' value={heightInput} onChange={handleHeightChange} required={heightRequired} placeholder='Height / cm'/>
                                <h5>Your weight is: <span>{verdict}</span></h5>
                            </div>
                        </div>
                        <button onClick={handleCalculateButton}>CALCULATE</button>
                    </div>

                    <div className="img-container">
                        <img src={bmiImg} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default TestemonialsBmiCalculator;