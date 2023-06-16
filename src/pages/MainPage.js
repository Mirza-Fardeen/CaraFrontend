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
        <div className="stickBox">
        <SideNavBar />
        </div>
        <main>
        <BasicTabs />
            <Outlet/>
        </main>
        
    </Fragment>
)
}

export default MainPage;