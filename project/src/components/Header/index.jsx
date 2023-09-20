import './index.scss'
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBarsStaggered, faPlus, faBars, faXmark  } from '@fortawesome/free-solid-svg-icons'
import GymBroLogo from '../../assets/img/GymbroLogo.svg'
import { useState } from 'react';


function Header(){

    const [open, setOpen] = useState(false);
    const [sideBar, setSideBar] = useState(false);

    const handleBurgerMenuButton = () => {
        setOpen(!open);
    }

    const closeMobileNavBar = () => {
        setOpen(false);
    };
    
    const handleSideBar = () =>{
        setSideBar(!sideBar);
    }

    return(
        <header>
            <Link className='logo' to='/'>
                <img src={GymBroLogo} alt="" />
            </Link>

            <nav className='nav-bar'>
                <NavBar />
            </nav>

            <nav className={`sidebar-container ${sideBar ? 'show' : ''}`}>
                <NavLink className='cross' onClick={handleSideBar}>
                    <FontAwesomeIcon  icon={faXmark} color='#000' />
                </NavLink >
                <SideBar />
            </nav>
            
            <nav className={`mobile-nav-bar ${open ? 'show' : ''}`}>
                <NavLink className='cross' onClick={() => {handleBurgerMenuButton()}}>
                    <FontAwesomeIcon  icon={faXmark} color='#000' />
                </NavLink >
                <NavBar closeMobileNavBar={closeMobileNavBar}/>
            </nav>

            <div className="left-section">
                <NavLink className='burger-menu' onClick={handleBurgerMenuButton}>
                    <FontAwesomeIcon icon={faBars} color='#fff' />
                </NavLink>
                <NavLink to='/signUp'>
                    <FontAwesomeIcon icon={faUser} color='#fff'/>   
                </NavLink>
                <NavLink onClick={handleSideBar}>
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