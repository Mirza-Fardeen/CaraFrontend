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
            {/* <div className={classes}>
                {mouse && <p style={{position:'absolute',left: `${x}px` , top:`${y}px`}}>true</p>}
                <h2  > Third component</h2>
            <h2 onMouseEnter={getValue} onMouseLeave={resetValue}> Third component</h2>
            </div> */}

        {/* <div className={classes.log}>
       <span className={classes.boxTwo}> 
        <div className={classes.box}>
        <label> username</label>
         <input type='text' />
         <label> password</label>
         <input type='text' />
        </div>
       </span>

      </div> */}


<div className={classes.container}>
<Container maxWidth="xl" >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={12}>
            <Typography variant="h2"  color='#22577A'>Audit</Typography>
            <br />
            <br />
            <Typography variant="subtitle1"  color='#22577A'>To carry out your audit, set your goal and decide a timeframe.</Typography>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h4" color='#54b5bc'>1. Goal</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>

          </Grid>


          <Grid item xs={12} sm={6} md={6}>

           
            <select onChange={Change} className={classes.selector}>
       
      {
       goals.map(e=> <option key={e.key} value={e.name}> {e.name}</option>)
      }
            </select>

          </Grid>
          <Grid item xs={12} sm={6} md={6}>

          </Grid>
          <Grid item xs={2} sm={2} md={6}>
            <Typography variant="h4" color='#54b5bc'>2. Timeframe</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>

          </Grid>
          <Grid item xs={12} sm={6} md={6}>

          
          <select onChange={(e)=>{console.log(e.target.value)}} className={classes.selector}>
       
       {
        tfs.map(e=> <option key={e.key} value={e.name}> {e.name}</option>)
       }
             </select>

          </Grid>
          <Grid item xs={12} sm={6} md={6}>

          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            <Button size="large" variant="outlined" color='secondary' onClick={redirectUser}>
              <Typography variant="subtitle1" color='#22577A'>Generate report</Typography>
            </Button>
          </Grid>


        </Grid>
      </Container>
     
      </div>
      
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