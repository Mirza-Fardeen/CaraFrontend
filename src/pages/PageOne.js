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
            <div className="stickBox">
        <SideNavBar />
        </div>
        <main>
            {/* <HomePageThree/> */}
          
            {/* <Outlet/> */}
        </main>
    </Fragment>
    
)
}


export default PageOne;