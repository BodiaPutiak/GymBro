import {  NavLink } from 'react-router-dom';

function NavBar(props) {

    const linksData = [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Schedule',
          path: '/schedule'
        },
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'Pricing',
          path: '/pricing'
        },
        {
          name: 'Classes',
          path: '/classes'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ];
      
    return (
        <>
            {linksData.map((item) => {
                return (
                    <NavLink onClick={props.closeMobileNavBar}exact='true' activaclassname='active' to={item.path}>
                        {item.name}
                    </NavLink>
                )
            })} 
        </>
    )
}
export default NavBar;