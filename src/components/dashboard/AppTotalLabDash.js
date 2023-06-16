
//import doctor28Filled from '@iconify/icons-fluent/doctor-28-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Card, Typography, Box } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(2, 3),
  color: '#22577A',
  backgroundColor: '#ffffff',
  style: { borderColor: '#000000', borderWidth: 10 },
  height: 300,
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
}));

// ----------------------------------------------------------------------
// insert AB with highest resistance as well as what the highest resistance is
const TOTAL = "56%";
const ANTIBIOTIC = "Co-amoxiclav"

function AppTotalLabDash(props) {
  return (
    <RootStyle>
      <Box sx={{ height: 350, border: 1, borderRadius: 2, borderColor: "secondary" }}>
        <br />
        <Typography variant="h5" mt={1.5} color='#aa3377'>{(24) + '%'}</Typography>
        <br></br>
        <Typography variant="subtitle2" >
          Of the isolates from urine samples showed</Typography>
        <Typography variant="subtitle2">resistance to an antibiotic, mainly to:
        </Typography>
        <br></br>
        <Typography variant="h5" color='#aa3377'>{(ANTIBIOTIC)}</Typography>
        <br />
        <br />
        <Button fullWidth variant="contained" color='secondary' href='#resistance'>See more on resistance</Button>
      </Box>
    </RootStyle>
  );
}


export default AppTotalLabDash;
