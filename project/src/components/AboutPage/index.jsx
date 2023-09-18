import './index.scss'
import GirlRunning from '../HomePage/GirlRunning'
import workOutBg from '../../assets/img/workout-bg.jpg'

function AboutPage() {
    const aboutPageButton = {
        endpoint: '/contact',
        content: 'CONTACT US'
    }

    return (
        <>
            <div className="banner">
                <h2>About Us</h2>
            </div>

            <GirlRunning marginClass='about-page' {...aboutPageButton}/>

            <div className="our-history-container">
                <div className="our-history">
                    <div className="text-container">
                        <img src="" alt="" />
                        <h2>Our History</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident alias odio aliquid rerum explicabo nihil harum ipsum debitis molestias laborum.</p>
                    </div>
                    <div className="img-container">
                        <img src={workOutBg} alt="" />
                    </div>
                </div>
                <div className="our-history">
                    <div className="img-container">
                        <img src={workOutBg} alt="" />
                    </div>
                    <div className="text-container">
                        <img src='' alt="" />
                        <h2>Our History</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident alias odio aliquid rerum explicabo nihil harum ipsum debitis molestias laborum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;