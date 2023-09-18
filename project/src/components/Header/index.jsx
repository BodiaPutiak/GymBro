import './index.scss'
import './NavBar.scss'
import NavBar from './NavBar';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBarsStaggered, faPlus, faBars, faXmark  } from '@fortawesome/free-solid-svg-icons'
import GymBroLogo from '../../assets/img/Gymbro_logo.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Header(){

    const [open, setOpen] = useState(false);

    const navigate = useNavigate()
    const handleJoin = () => {
        navigate('/classes');
    }

    const renderMobiileNavBar = () => {
        if (open) {
            return(
                <nav className={`mobile-nav-bar ${open ? 'show' : ''}`}>
                    <NavLink className='cross' onClick={() => {handleBurgerMenuButton()}}>
                        <FontAwesomeIcon  icon={faXmark} color='#000' />
                    </NavLink>
                    <NavBar close={open}/>
                </nav>
            )
        } else {
            return (<div className='nav-bar'></div>)
        }
    }

    const handleBurgerMenuButton = () => {
        setOpen(!open);
    }

    return(
        <header>
            <Link className='logo' to='/'>
                <img src={GymBroLogo} alt="" />
            </Link>

            <nav className='nav-bar'>
                <NavBar />
            </nav>
            
            {renderMobiileNavBar()}

            <div className="left-section">
                <NavLink className='burger-menu' onClick={handleBurgerMenuButton}>
                    <FontAwesomeIcon icon={faBars} color='#fff' />
                </NavLink>
                <NavLink>
                    <FontAwesomeIcon icon={faUser} color='#fff'/>   
                </NavLink>
                <NavLink>
                    <FontAwesomeIcon icon={faBarsStaggered} color='#fff'/>
                </NavLink>
                <NavLink className='join-class' to='/classes'>
                    <div className="rectangle">
                        <FontAwesomeIcon icon={faPlus} color='#fff' />
                    </div>
                    <div className="join-now-text">JOIN CLASS NOW</div>
                </NavLink>
            </div>
        </header>
    )
}
export default Header;