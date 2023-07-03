import { useEffect, useState } from 'react';
import classes from './FilterComponent.module.css';
import { Link } from 'react-router-dom';

function Filter(props){

    let ageB = false;
   const [ageSelected , setAgeSelected]= useState('Select Age');
   const [ageBox , setAgeBox]= useState(false);
   const [genderBox ,setGengderBox] = useState(false);
   const [genderSelected, setGender] = useState('Select Gender')
   const [isColl , setColl]= useState(false);
    const getValue=event=>{
        event.preventDefault();
       setColl((e)=>{
 
        return !e;
        
       })
    }


    useEffect(()=>{
        props.setData({age : ageSelected , gender: genderSelected})
    }, [ageSelected , genderSelected])
function setAgeVis(event){
    event.stopPropagation();

setAgeBox((e)=>{

    ageB = !e;
    return !e;
})
   };
function setGenderVis(event){
    event.stopPropagation();
    setGengderBox(e=>{
        return !e;
    })
}
function getAge(e){
    e.preventDefault();
    e.stopPropagation();
   setAgeSelected(e.target.text);

   setAgeBox(e=>{
    return !e;
   })
   };

function getGender(e){
    e.preventDefault();
    e.stopPropagation();
    setGender(e.target.text);
    setGengderBox(e=>{
        return !e;
    })

   }
    return (
        <>
        <div className='collapsible'>

        
        <div className={classes.filter} onClick={getValue}>
            <h2>Filters:</h2>
            <div className={classes.content} style={{display: isColl ? 'block' : 'none'}}>

<div  style={{display: 'flex'}}>
    <div className={classes.field}>
    <button onClick={setAgeVis} className={classes.dropbtn}>{ageSelected!=='Select Age' ? `Age ${ageSelected}`: 'Select Age'}</button>
    <div  className={`${ageBox? classes.dropdowncontent : classes.ageshow }`} > 
<Link className={classes.link} onClick={getAge} style={{marginTop: '-20px'}}> 10</Link>
<Link className={classes.link} onClick={getAge}> 20</Link>
<Link className={classes.link} onClick={getAge}> 40</Link>
<Link className={classes.link} onClick={getAge}> 60</Link>
<Link className={classes.link} onClick={getAge}> 80</Link>
   </div>
    </div>

<div className={classes.field}>

<button onClick={setGenderVis} className={classes.dropbtn}>{genderSelected!=='Select Gender'? genderSelected : 'Select Gender'}</button>
<div  className={`${genderBox? classes.dropdowncontent : classes.genshow }`} > 

<Link className={classes.link} onClick={getGender} style={{marginTop: '-20px'}}> Male </Link>

<Link className={classes.link} onClick={getGender}> Female</Link>

   </div>
</div>

</div>

     </div>
            
        </div>
        </div>
        </>
    )
}

export default Filter;