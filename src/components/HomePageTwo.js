import { Fragment, useRef } from "react";
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

 function HomePageTwo(){

return(
    <Fragment>
      
      <Container maxWidth="xl" >
     <Grid container spacing={12}>       
          <Grid item xs={12} sm={6} md={12}>
          <Typography variant='h2' color='#22577A'>Antibiotics</Typography>
                  <Typography variant="subtitle1"  color='#22577A'>Graphs display data for 12 months previous to the last upload.</Typography>
          <br />
          <Button variant="contained" href=''>Upload new data</Button>
          <br></br>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
          <AppTotalAB />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppTotalDuration />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppTotalLabResults />
          </Grid>
    </Grid>
    <Grid container spacing={4} sx={{ borderRadius: 0}}>       
          <Grid item xs={12} md={6} lg={12}>
            <AppConsultPrescribeComponent />
          </Grid>
          <Grid item xs={12} md={6} lg={12} id="antibiotics">
            <AppAbPies />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppTypesOfAB />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppResistanceAB />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppAgeOverview/>
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AppLineAB/>
          </Grid>
     </Grid>
    </Container>
    </Fragment>
)
}

export default HomePageTwo;