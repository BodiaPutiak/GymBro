import {  NavLink } from 'react-router-dom'
import './index.scss'

function NavBar() {
    return (
        <>
            <NavLink exact='true' activaclassname='active' to='/'>
                Home
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='/about'>
                About
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='/schedule'>
                Schedule
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='#'>
                Blog
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='/pricing'>
                Pricing
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='/classes'>
                Classes
            </NavLink>
            <NavLink exact='true' activaclassname='active' to='/contact'>
                Contact
            </NavLink>
        </>
    )
}
export default NavBar;