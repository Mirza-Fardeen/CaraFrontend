import { Form } from "react-router-dom";

import classes from './LogInForm.module.css'
function LogInForm(){
    return(
     
      
          <div className={classes.log}>
       <Form method='post' action="/dashboard/app" className={classes.form}>
       
       <span className={classes.boxTwo}> 
        <div className={classes.box}>
        <label> username</label>
         <input type='text' name='username'/>
         <label> password</label>
         <input type='text' name='password'/>
         <button type="submit" className={classes.button}> Log In</button>
        </div>
       
       </span>
     
      
        </Form>
        </div>
       
    )
}
export default LogInForm;