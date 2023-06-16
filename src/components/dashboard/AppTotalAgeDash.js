
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Card, Typography, Box } from '@mui/material';
// utils


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 3),
  color: '#22577A',
  backgroundColor: '#ffffff',
  borderColor:theme.palette.primary.main,
  borderWidth: 5,
  height: 300,
  display: "flex", 
  flexDirection: 'column',
  justifyContent: "center",
}));

// ----------------------------------------------------------------------
// AB1Percentage to take percentage of all patients receiving one antibiotic in previous 12months
const AB1Percentage = "27%";
//ABMore to take percentage of all patients receiving antibiotics for more than 3days
const ABMorePercentage = "15%"

function AppTotalAgeDash(props) {
  return (
    <RootStyle>
    <Box sx={{ height: 350, border: 1, borderRadius: 2, borderColor: "secondary" }}>
    <br />
    <Typography variant="h5" mt={1.5} color='#aa3377' >{(45) + '%'}</Typography>
      <Typography variant="subtitle2" >
        of your patients received an  antibiotic</Typography>
        <Typography variant="subtitle2"> at least once in the previous 12 months.</Typography>
    <br />    
    <Typography variant="subtitle2"> Percentage of patients prescribed</Typography>
    <Typography variant="subtitle2"> antibiotics for longer than 3 days:</Typography>
      <Typography variant="h5" color='#aa3377'>{(45)+ '%'}</Typography>
    <br />
      <Button fullWidth variant="contained" color='secondary' href='#duration'>See more on duration</Button>
      </Box>
    </RootStyle>
  );
}


 export default AppTotalAgeDash;
