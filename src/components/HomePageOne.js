
import { Box, Grid, Container, Typography, Paper, Stack, Button } from '@mui/material';
import { json } from 'react-router';
import AppConsultPrescribeDash from './dashboard/AppConsultPrescribeDash';
import AppTotalAbDash from './dashboard/AppTotalAbDash';
import AppTotalAgeDash from './dashboard/AppTotalAgeDash';
import AppTotalLabDash from './dashboard/AppTotalLabDash';
import AppTypesOfAntibioticsDash from './dashboard/AppTypesOfAntibioticsDash';
import classes from './HomePageOne.module.css';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogInForm from './LogInForm';

let data = {
  ab: {
    total: 1960,
    average: 1264
  },
  categories: [
    '<1', 
    '1-6',
    '6-12',
    '12-24',
    '24-50',
    '50-65',
    '65-70',
    'over 70'
  ],
  consultations:{
    '12_month':{
      all: 3000,
      ab_perc: 45, // %
      ab_total: 1960
    }
    }
}

function  HomePageOne(){
 const [pres,setPre]= useState({pre: 0, ant:0});



 const dat = useLoaderData();
 useEffect( ()=>{

  async function load (){
    const appPresAnt = await fetch("http://localhost:8080/user/presAnt");
    if(!appPresAnt.ok){

    }
    else{
      const dat =await appPresAnt.clone().json();
      const{allPrescriptions , allPrescripAntibiotics} =dat;
    setPre({pre: allPrescriptions, ant: allPrescripAntibiotics})
    
   
    };
    
  }

load();

  // const appPresAnt = await fetch("http://localhost:8080/user/presAnt");
 },[])



return (
    <>
     
      <Container maxWidth="xl" >
      <Box sx={{ pb: 5 }}>
        </Box>
        {/* Filters */}
        <Grid container spacing={12}> 
        <Grid item xs={3} sm={6} md={12}>
                  <Typography variant="h2"  color='#22577A'>Antibiotics</Typography>
                 <Typography variant="subtitle1"  color='#22577A'>Graphs display data for 12 months previous to the last upload.</Typography>
          <br />
          <Button variant="contained" href=''>Upload new data</Button>
          <br></br>
          </Grid>
          {/* <Grid item xs={10} sm={6} md={4} >
           
            <AppTotalAbDash data={data} />
          
         
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppTotalAgeDash data={data}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppTotalLabDash />
          </Grid> */}

          <div className={classes.firstBox}>
           
            <AppTotalAbDash data={data}/>
            
          <AppTotalAgeDash data={data}/>
          <AppTotalLabDash />
          </div>

        </Grid> 

      
        <Grid container spacing={4} sx={{ borderRadius: 0}}>       
          <Grid item xs={12} md={6} lg={12}>
            <AppConsultPrescribeDash con={ dat.con} 
                                       pres={pres.pre}
                                       conAnt={dat.conAnt}
                                       presAnt={pres.ant}/>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTypesOfAntibioticsDash green={dat.green}
                                        red={dat.red}/>
          </Grid>
          </Grid> 

        </Container>    
       
    </>
  
)
    
}

export default HomePageOne;

export async function loader(){
let consult;
let pres;

let color;



const appConsultAnt = await fetch("http://localhost:8080/user/consulAnt");
// const appPresAnt = await fetch("http://localhost:8080/user/presAnt");
const appPresColor = await fetch("http://localhost:8080/user/presColor");
if(!appConsultAnt.ok){
  return json({message: 'Could not save event '} , {status: 500});
}

else{

  // pres = await appPresAnt.clone().json();
  consult= await appConsultAnt.clone().json();

  color = await appPresColor.clone().json();

  // con: consult.allConsultations , 
  // conAnt: consult.allConsultAntibiotics, 
  // pres: pres.allPrescriptions , presAnt: pres.allPrescripAntibiotics
return {con: consult.allConsultations , 
  conAnt: consult.allConsultAntibiotics, 
  pres: 15500 , presAnt: 1400,
   green: color.green , red: color.red};

// return {consult: consult , pres: pres}

 }

}