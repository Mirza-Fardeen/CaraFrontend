import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import NavCard from "./NavCard";
import classes from './SideNavBar.css';
import logo from '../pictures/logo.jpg';
function SideNavBar(){
  const classes = 'list-group-item list-group-item-action py-2 ripple';
    return (
        <Fragment>
 
<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <img src={logo} />
      <NavLink to='/dashboard/app'
          className={({isActive})=>
          isActive ? `${classes} active`: classes 
          }
           end={true}
           style={{textDecoration: 'none'}} >
        <i
            className="fas fa-lock fa-fw me-3"></i><span>Select Dashboard</span>
        </NavLink>
      
        <NavLink to='/page'
        className={({isActive})=>
        isActive ? `${classes} active` : classes
        }
        style={{textDecoration: 'none' }} >
        <i
            className="fas fa-lock fa-fw me-3"></i><span>My Practice</span>
        </NavLink>
 
      </div>
    </div>
  </nav>
        </Fragment>
    )
}
export default SideNavBar;