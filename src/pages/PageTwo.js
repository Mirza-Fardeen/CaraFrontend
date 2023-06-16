import { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import NewComponent from "../components/HomePageTwo";
import SideNavBar from "../components/SideNavBar";
import BasicTabs from "../components/TabComponent";
import LogInForm from "../components/LogInForm";

function PageTwo(){

    // const navigate=   useNavigate();
    // useEffect(()=>{
    //     navigate('/pageTwo/two');
    // },[])
    return(
        <Fragment>
        
             <h2> Page Two</h2>
         <SideNavBar />
         <h2> Page Two</h2>
         {/* <Outlet/> */}
         <LogInForm/>
        </Fragment>
        
    )
}
export default PageTwo();