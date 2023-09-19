import './index.scss';
import { gymClassSchedule } from './scheduleObject';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Schedule() {

    const [schedule, setSchedule] = useState('Monday');
    const [clicked, setClicked] = useState(false);
    
    const selectedDaySchedule = gymClassSchedule[schedule];

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const navigate = useNavigate();

    const handleJoinNowButton = () => {
        navigate('/contact')
    }

    const handleDayButton = (day) => {
        setSchedule(day);
        setClicked(!clicked);
    }


    return (
        <>
            <div className="banner">
                <h2>Schdule By Day</h2>
            </div>

            <div className="days-flex-container">
                {weekDays.map((day) => {
                    return (
                        <button 
                        key={day}
                        className={schedule === day ? 'clicked' : ''}
                        onClick={() => handleDayButton(day)}>
                            {day}
                        </button>
                    )
                })}
            </div>
            <div className="schedule-container">
                {selectedDaySchedule.map((item) => {
                    return (
                        <div className="schedule-column">
                            <ul>
                                <li>
                                    <h6>Class Name</h6>
                                    <p>{item.name}</p>
                                </li>
                                <li>
                                    <h6>Time</h6>
                                    <p>{item.time}</p>
                                </li>
                                <li>
                                    <h6>Trainer</h6>
                                    <p>{item.trainer}</p>
                                </li>
                                <li>
                                    <button onClick={handleJoinNowButton}>Join Now</button>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Schedule;