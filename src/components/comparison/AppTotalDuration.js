
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
  borderColor: '#000000',
  height: 250,
  display: "flex", 
  flexDirection: 'column',
  justifyContent: "center",
}));

// ----------------------------------------------------------------------
// AB1Percentage to take percentage of all patients in your practice receiving one antibiotic in last 12month or timeframe specified by filter
const AB1Percentage = "27%";
// AB1Percentage to take percentage of all patients of filtered practices receiving one antibiotic in last 12month or timeframe specified by filter
const ABOtherPractices = "20%"

export default function AppTotalDuration() {
  return (
    <RootStyle>
    <Box sx={{ height: 250, border: 1, borderRadius: 2, borderColor: "secondary" }}>
    <br />
      <Typography variant="h5" mt={1.5} color='#aa3377' >{(AB1Percentage)}</Typography>
      <Typography variant="subtitle2" >
of your patients received an </Typography> 
<Typography variant="subtitle2"> antibiotic at least  once.</Typography>
<br />
<Typography variant="subtitle2">
Filtered practices average:</Typography>
      <Typography variant="h5" color='#aa3377'>{(ABOtherPractices)}</Typography>
<br>
      </br>
      <Button fullWidth variant="contained" color='secondary' href='#duration'>See more on duration</Button>
      </Box>
    </RootStyle>
  );
}
