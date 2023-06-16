
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Card, Typography } from '@mui/material';



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
// calculate total number of AB prescriprions of practice and all practices average for 12months prior to last data upload.

function AppTotalAbDash(props) {

  return (
    <RootStyle>
    <Box sx={{ height: 350, border: 1, borderRadius: 2, borderColor: "secondary" }}>
     <br />
      <Typography variant="h5" mt={1.5} color='#aa3377'>{props.data.ab.total}</Typography>
      <Typography variant="subtitle2">
        Number of antibiotics prescribed</Typography>
        <Typography variant="subtitle2"> in the previous 12 months.
    </Typography>
    <br />
    <Typography variant="subtitle2" color="#fff"> placeholder </Typography>
      <Typography variant="subtitle2" >
      All practices average:  
      </Typography>
      <Typography variant="h5" color='#aa3377'>{(props.data.ab.average)}</Typography>
    <br>
      </br>
      <Button fullWidth variant="contained" color='secondary' href='#antibiotics'>See more on antibiotics</Button>
      </Box>
    </RootStyle>
  );
}

export default AppTotalAbDash;