import { Fragment } from "react";
import { Outlet } from "react-router";
import SideNavBar from "../components/SideNavBar";
import BasicTabs from "../components/TabComponent";
import HomePageThree from "../components/HomePageThree";
import './mainClass.css';
import LogInForm from "../components/LogInForm";
function PageOne(){
return(

         <Fragment>
            <div className="item-1">
        <SideNavBar />

             </div>
         <div className="item-2">
             {/* <BasicTabs />
            <Outlet/> */}
      
          </div>
    </Fragment>
    
)
}


export default PageOne;