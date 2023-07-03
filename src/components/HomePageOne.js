
import { Box, Grid, Container, Typography, Paper, Stack, Button } from '@mui/material';
import {  Await, json } from 'react-router';
import AppConsultPrescribeDash from './dashboard/AppConsultPrescribeDash';
import AppTotalAbDash from './dashboard/AppTotalAbDash';
import AppTotalAgeDash from './dashboard/AppTotalAgeDash';
import AppTotalLabDash from './dashboard/AppTotalLabDash';
import AppTypesOfAntibioticsDash from './dashboard/AppTypesOfAntibioticsDash';
import classes from './HomePageOne.module.css';
import { useLoaderData ,redirect, defer} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import LogInForm from './LogInForm';
import Filter from './FilterComponent';


let pathId;
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
// allConsultAntibiotics

// allConsultations
const {colorChart ,consultationAndPrescription}=useLoaderData()


 const [sta , setsta]= useState(false);
 const [age,setAge] = useState(null);
 const [gender,setGender]= useState(null);
 const getData=(data)=>{
  const {age , gender}= data;
  setAge(age);
  setGender(gender);
  
  }
  
  
  async function sendData (){
  
  // let consultPrescription = getByGenderAndAge(gender , age);
  
  // let colorDetail =getColorCompareAntibiotics(gender,age);
  
  // let colorNameDetail = getColorNameDetails(gender,age);
  setsta(true)
  // setvaluePrescribeConsultation(consultPrescription);
  // setColorDetailAntibiotics(colorDetail);
  // setColorNameDetailsAntibiotics(colorNameDetail);
  }

return (
    <>
     
     <div className={classes.filter}>
      <Filter setData={getData} />
      <button onClick={sendData} className={classes.btnFilter}>  Submit </button>
      </div>
     
   
     
    
        {/* Filters */}
    
        
                  <Typography variant="h2"  color='#22577A'>Antibiotics</Typography>
                 <Typography variant="subtitle1"  color='#22577A'>Graphs display data for 12 months previous to the last upload.</Typography>
       
          <Button variant="contained" href=''>Upload new data</Button>
        
      
       
<div className={classes.mainContainer}>
          <div className={classes.apptotal}>
            <div className={classes.total}>
            <AppTotalAbDash data={data}/>
            </div>
       
            <div className={classes.total}>
            <AppTotalAgeDash data={data}/>
              </div>      
        <div className={classes.total}>
        <AppTotalLabDash /> 
        </div>
            
          </div>
           
      
      
      
      <div className={classes.contain}>
      {sta && <Suspense fallback={<p>Loading....</p>}>
              <Await resolve={consultationAndPrescription}>
                {(event)=> 
                 <AppConsultPrescribeDash con={event.consult.allConsultations} 
                 pres={event.prescription.allPrescriptions}
                 conAnt={event.consult.allConsultAntibiotics}
                 presAnt={event.prescription.allPrescripAntibiotics}/>
                }
              </Await>

            </Suspense>}
      </div>

         
           
         
        <div className={classes.contain}>
          {sta && <Suspense fallback={<p>Loading...</p>}>
              <Await resolve={colorChart}>
                {(event)=>  <AppTypesOfAntibioticsDash green={event.color.green}
                                        red={event.color.red}
                                        userGreen={event.userCol.green}
                                        userRed={event.userCol.red}
                                        antibioticDetails={event.antibioticDetails}/>}
              </Await>
            </Suspense>
}
            </div>

      
            </div>
     
       
    </>
  
)
    
}

export default HomePageOne;

async function getConsultationPrescriptioninfo(){
const appConsultant = await fetch("http://localhost:8080/user/consulAnt");
const consult= await appConsultant.clone().json();
const appPrescription = await fetch("http://localhost:8080/user/presAnt");
const prescription = await appPrescription.clone().json();
return {consult: consult , prescription: prescription};

}

async function getColorDetails(){
  const appPresColor = await fetch("http://localhost:8080/user/presColor");
  const userColor = await fetch(`http://localhost:8080/user/presColor/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2`);
  const allAntibioticDetails = await fetch("http://localhost:8080/user/getAntibioticDetails");

  const color = await appPresColor.clone().json();
  const  userCol = await userColor.clone().json();
  const  antibioticDetails = await allAntibioticDetails.clone().json();

  return {color: color , userCol : userCol , antibioticDetails: antibioticDetails}
}

export function loader(){
  return defer(
    {consultationAndPrescription : getConsultationPrescriptioninfo(),
      colorChart : getColorDetails()
    }
  )
}

// export async function loader(){
// let consult;

// let color;

// let userCol;

// let antibioticDetails;

// const appConsultAnt = await fetch("http://localhost:8080/user/consulAnt");
// // const appPresAnt = await fetch("http://localhost:8080/user/presAnt");
// const appPresColor = await fetch("http://localhost:8080/user/presColor");

// const userColor = await fetch(`http://localhost:8080/user/presColor/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2`);

// const allAntibioticDetails = await fetch("http://localhost:8080/user/getAntibioticDetails");
// if(!appConsultAnt.ok){
//   return json({message: 'Could not save event '} , {status: 500});
// }

// else{

//   // pres = await appPresAnt.clone().json();
//   consult= await appConsultAnt.clone().json();

//   color = await appPresColor.clone().json();
//   userCol = await userColor.clone().json();
//   antibioticDetails = await allAntibioticDetails.clone().json();

//   if(!pathId){
//     // return redirect('/')
//   }
//   // con: consult.allConsultations , 
//   // conAnt: consult.allConsultAntibiotics, 
//   // pres: pres.allPrescriptions , presAnt: pres.allPrescripAntibiotics
// return {con: consult.allConsultations , 
//   conAnt: consult.allConsultAntibiotics, 
//   pres: 15500 , presAnt: 1400,
//    green: color.green , red: color.red , userGreen : userCol.green 
//    , userRed: userCol.red , antibioticDetails: antibioticDetails};

// // return {consult: consult , pres: pres}

//  }

// }






export async function action({request , params}){
  try{
      console.log("its clicked")
      const data = await request.formData();
      console.log(data.get('username'));
      pathId = "af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2"
      
  }
  catch(err){
      
  }
  
 return redirect('/dashboard/app');
}

