
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Card, Typography } from '@mui/material';
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
  height: 250,
  display: "flex", 
  flexDirection: 'column',
  justifyContent: "center",
}));

// ----------------------------------------------------------------------
// own practice
const TOTAL = '1,960';
// filtered practices average
const REGIONAL = '1,264';
export default function AppTotalAB() {
  return (
    <RootStyle>
    <Box sx={{ height: 250, border: 1, borderRadius: 2, borderColor: "secondary" }}>
      <br />
      <Typography variant="h5" mt={1.5} color='#aa3377'>{(TOTAL)}</Typography>
      <Typography variant="subtitle2">
        Number of antibiotics prescribed.
    </Typography>
    <br />
    <br />
      <Typography variant="subtitle2" >
      Filtered practices average:  
      </Typography>
      <Typography variant="h5" color='#aa3377'>{(REGIONAL)}</Typography>
    <br>
      </br>
      <Button fullWidth variant="contained" color='secondary' href='#antibiotics'>See more on antibiotics</Button>
      </Box>
    </RootStyle>
  );
}
