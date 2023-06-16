
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
  style: {borderColor: '#000000', borderWidth: 10},
  height: 250,
  display: "flex", 
  flexDirection: 'column',
  justifyContent: "center",
}));

// ----------------------------------------------------------------------
// insert AB with highest resistance as well as what the highest resistance is
const TOTAL = "56%";
const OTHERPRACTICES = "60%"

export default function AppTotalLabResults() {
  return (
    <RootStyle>
    <Box sx={{ height: 250, border: 1, borderRadius: 2, borderColor: "secondary" }}>
      <br />
      <Typography variant="h5" mt={1.5} color='#aa3377'>{(TOTAL)}</Typography>
      <Typography variant="subtitle2" >
Of the isolates from urine samples showed resistance to an antibiotic.
</Typography>
<br />
<Typography variant="subtitle2">
Filtered practices average:
</Typography>
      <Typography variant="h5" color='#aa3377'>{(OTHERPRACTICES)}</Typography>
      <br>
      </br>
      <Button fullWidth variant="contained" color='secondary' href='#resistance'>See more on resistance</Button>
      </Box>
    </RootStyle>
  );
}
