import { Fragment, Suspense, useEffect, useRef, useState } from "react";
import { Box, Grid, Container, Typography, Paper, Stack, Button } from '@mui/material';
import classes from './HomePageTwo.module.css';
import AppTotalAB from "./comparison/AppTotalAB";
import AppTotalDuration from "./comparison/AppTotalDuration";
import AppTotalLabResults from "./comparison/AppTotalLabResults";
import AppConsultPrescribeComponent from "./comparison/AppConsultPrescribeComparison";
import AppAbPies from "./comparison/AppAbPies";
import AppTypesOfAB from "./comparison/AppTypesOfAB";
import AppResistanceAB from "./comparison/AppResistanceAB";
import AppAgeOverview from "./comparison/AppAgeOverview";
import AppLineAB from "./comparison/AppLineAB";
import Filter from "./FilterComponent";
import { defer , Await, useLoaderData} from "react-router-dom";
import { trim } from "lodash";


function HomePageTwo(){

const [valuePrescribeConsultation , setvaluePrescribeConsultation]= useState(null);
const [colorDetailAntibiotics , setColorDetailAntibiotics] = useState(null);
const [colorNameDetailsAntibiotics , setColorNameDetailsAntibiotics] = useState(null);


const [sta , setsta]= useState(false);
const [age,setAge] = useState(null);
const [gender,setGender]= useState(null);

const getData=(data)=>{
const {age , gender}= data;
setAge(age);
setGender(gender);

}


async function sendData (){

let consultPrescription = getByGenderAndAge(gender , age);

let colorDetail =getColorCompareAntibiotics(gender,age);

let colorNameDetail = getColorNameDetails(gender,age);
setsta(true)
setvaluePrescribeConsultation(consultPrescription);
setColorDetailAntibiotics(colorDetail);
setColorNameDetailsAntibiotics(colorNameDetail);
}

return(
    <Fragment>
      <div className={classes.filter}>
      <Filter setData={getData} />
      <button onClick={sendData} className={classes.btnFilter}>  Submit </button>
      </div>
     

      
         
          <Typography variant='h2' color='#22577A'>Antibiotics</Typography>
                  <Typography variant="subtitle1"  color='#22577A'>Graphs display data for 12 months previous to the last upload.</Typography>
        
          <Button variant="contained" href=''>Upload new data</Button>
        
        
          <div className={classes.apptotal}>
            <div className={classes.total}>
            <AppTotalAB />
            </div>
       
            <div className={classes.total}>
            <AppTotalDuration />
              </div>      
        <div className={classes.total}>
        <AppTotalLabResults />
        </div>
            
          </div>
         

          <div>
           
            {sta &&
               <Suspense fallback={<p>Loading....</p>}>
               <Await resolve={valuePrescribeConsultation}>
              
                 {(event)=> <AppConsultPrescribeComponent values={event} />}
                </Await>
               </Suspense>
            }
           
           </div>
         
          <div>
         {sta &&
          <Suspense fallback={<p>Loading....</p>}>
          <Await resolve={colorDetailAntibiotics}>
         
            {(event)=> <AppAbPies  values={event} />}
           </Await>
          </Suspense>
          
         }
         </div>
     
        
          <div>

          {sta &&
          <Suspense fallback={<p>Loading....</p>}>
          <Await resolve={colorNameDetailsAntibiotics}>
         
            {(event)=> <AppTypesOfAB values={event} />}
           </Await>
          </Suspense>
          
         }
        
        </div>
       
    </Fragment>
)
}

export default HomePageTwo;



export async function getByGenderAndAge(gender,age){

  const gen= trim(gender);
  const pres = await fetch(`http://localhost:8080/user/getByGenderAndAge/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2/${gen}/${age}`);
  const consult =  await fetch(`http://localhost:8080/user/getConsultation/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2/${gen}/${age}`)
  const presbody = await pres.clone().json();
  const consultBody = await consult.clone().json();

  return {presbody , consultBody};
}

export async function getColorCompareAntibiotics(gender,age){

  const gen = trim(gender);

 const color= await fetch(`http://localhost:8080/user/getColorComparison/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2/${gen}/${age}`);

 const body =await color.clone().json();

 return body;
}

export async function getColorNameDetails(gender , age){

  const gen = trim(gender);

 const color= await fetch(`http://localhost:8080/user/getColorNameDetails/af74269e8e4319a4d73e2321a60d8acb91f4ffa27e5bdd7c4a6822cc9f86baa2/${gen}/${age}`);

 const body =await color.clone().json();

 return body;
}

  
  
