import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavCard from "./NavCard";
import classes from './SideNavBar.module.css';
import logo from '../pictures/logo.jpg';
import { BorderRight } from "@mui/icons-material";
function SideNavBar(){

  useState(false)

    return (
        <Fragment>
 
<nav>

      <div style={{display: 'block'}}>

       <img src={logo} style={{height : '30vh' , width : '100%'}} />
      </div>
      
      <NavLink to='/dashboard/app'

         className={classes.lin}
         >
          {({ isActive, isPending }) => (
    <div className={isActive ? classes.linBoxActive : 
      classes.linBox}>Select Dashboard</div>)
  }
          
        </NavLink>
      <NavLink to='/page'
       className={classes.lin}
        >
            {({ isActive, isPending }) => (
    <div className={isActive ? classes.linBoxActive :
       classes.linBox}>My Practice</div>)}
    
        </NavLink>
      
        
  </nav>
        </Fragment>
    )
}
export default SideNavBar;