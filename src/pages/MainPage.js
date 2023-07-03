import React,{ Fragment, useEffect } from "react";
import BasicTabs from "../components/TabComponent";

import { Outlet, useNavigate} from 'react-router-dom';
import SideNavBar from "../components/SideNavBar";

import './mainClass.css';

function MainPage(){
    // const navigate=   useNavigate();
    // useEffect(()=>{
    //     navigate('/home');
    // },[]);
return(
    <Fragment>
       <div className="grid-container">
        <div className="item-1">
        <SideNavBar />

             </div>
         <div className="item-2" >
             <BasicTabs />
            
             <Outlet/>
          </div>
       </div>
       
      
        
       
        
    </Fragment>
)
}

export default MainPage;