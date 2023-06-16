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
           <LogInForm/>
            {/* <Outlet/> */}
        </main>
    </Fragment>
    
)
}
export async function action({request , params}){
    try{
        console.log("its clicked")
        const data = await request.formData();
        console.log(data.get('username'));
        
    }
    catch(err){
        
    }
    
   return null;
}

export default PageOne;