import { Fragment, useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { useNavigate } from "react-router-dom";
import AppConsultPrescribeComponent from "./comparison/AppConsultPrescribeComparison";
import { Box, Grid, Container, Typography, Paper, Stack, TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from './ThirdComponent.module.css';
import LogInForm from "./LogInForm";
function HomePageThree(){

  const events =  useLoaderData();
 
  const [goal, setGoal] = useState();
  const [tf, setTf] = useState();
  const navigate = useNavigate();

 
  useEffect(()=>{
    events.forEach(e=> console.log(e.name))
  },[])


  const goals = [{key: 0, name: "Goals"}, {key:1,name:"Reduce the percentage of antibiotic prescriptions"} 
  ,{key:2,name:"Reduce the percentage of red antibiotic prescriptions"},{key:3,name:"Reduce the number of antibiotic prescriptions"}];

  let tfs = [{key: 0, name:"Timeframe"},{key:1, name:"1 month"}, {key:2, name:"3 months"},{key:3, name:"12 months"}] 
  let redirectUser = ()=>{

  }
const Change =(e)=>{
console.log(e.target.value)
}
    return (
        <Fragment>
         

            <Typography variant="h2"  color='#22577A'>Audit</Typography>
           
            <Typography variant="subtitle1"  color='#22577A'>To carry out your audit, set your goal and decide a timeframe.</Typography>
        
        
      
            <Typography variant="h4" color='#54b5bc'>1. Goal</Typography>
     

    





           <div className={classes.radio} style={{marginLeft: '9px'}}>
          
           <input type="radio" id="html" name="fav_language" value="HTML" />
                        <label for="html" >Reduce the percentage of antibiotic prescriptions</label>
            </div>
            <div className={classes.radio}>
           
           <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label for="css">Reduce the percentage of red antibiotic prescriptions</label>
           </div>
           <div className={classes.radio}>
           
               <input type="radio" id="javascript" name="fav_language" value="JAVASCRIPT"/>
                       <label for="javascript">Reduce the number of antibiotic prescriptions</label>
                      </div>
         


         
        
            <Typography variant="h4" color='#54b5bc'>2. Timeframe</Typography>
       
     

          
          <div className={classes.radio} style={{marginLeft: '9px'}}>
          
           <input type="radio" id="1" name="fav_language" value="1" />
                        <label for="1" >1 month</label>
            </div>
            <div className={classes.radio}>
           
           <input type="radio" id="3" name="fav_language" value="3"/>
            <label for="3">3 months</label>
           </div>
           <div className={classes.radio}>
           
               <input type="radio" id="12" name="fav_language" value="12"/>
                       <label for="12">12 months</label>
                      </div>
        
        
       
            <Button size="large" variant="outlined" color='secondary' onClick={redirectUser}>
              <Typography variant="subtitle1" color='#22577A'>Generate report</Typography>
            </Button>
         


       
     
     
  
        </Fragment>
    )
}
export default HomePageThree;

export function loader(){
  return  [{
    name: 'Your practice',
    data: [900, 100],
    color: '#3E8397'},
  {
    name: 'Filtered practices average',
    data: [580, 100],
    color: '#6eb1c4'}
      ];
}