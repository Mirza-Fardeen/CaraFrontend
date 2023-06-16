import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  useNavigate } from 'react-router-dom';

import {useEffect , useState} from "react";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] =useState(0);


  const navigate =useNavigate();
  


  useEffect(()=>{
    if(value ===0){
      navigate('/dashboard/app')
    }
    if(value===1){
      navigate('/dasboard/comparison')
    }
    if(value===2){
      navigate('/dashboard/audit')
    }
  } , [value])


  const handleChange = (event, newValue) => {

  
    setValue(newValue);
   
    
  };

    
  

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Antibiotics Dashboard" {...a11yProps(0)} />
          <Tab label="Compare Your Data To Other Practice" {...a11yProps(1)} /> 
          <Tab label="Audit Your Data" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* {value==0 && <FirstComponent/>} */}
      </TabPanel>
    <TabPanel value={value} index={1}>
      </TabPanel> 
      <TabPanel value={value} index={2}>
      </TabPanel>
    </Box>
  );
}
