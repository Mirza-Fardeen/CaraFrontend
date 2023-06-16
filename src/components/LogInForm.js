import { Form } from "react-router-dom";

import classes from './LogInForm.module.css'
function LogInForm(){
    return(
        <>
       <Form method='post' className={classes.form}>
         <div className={classes.log}>
       <span className={classes.boxTwo}> 
        <div className={classes.box}>
        <label> username</label>
         <input type='text' name='username'/>
         <label> password</label>
         <input type='text' name='password'/>
         <button type="submit" className={classes.button}> logIn</button>
        </div>
       
       </span>
     
      </div>
        </Form>
        </>
    )
}
export default LogInForm;