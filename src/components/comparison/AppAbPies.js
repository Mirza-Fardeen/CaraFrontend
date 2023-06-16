import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
// utils
import { fNumber } from '../../utility/formatNumber';
import BaseOptionChart from '../../charts/BaseOptionChart';




// ----------------------------------------------------------------------

//own practice
const ABPractice = [100, 20]

//practices chosen through filter
const ABOtherPractices = [135, 165]

export default function AppAbPies() {
const chartOptionsComparisons = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      x: {
          show: true,
          // format: 'dd MMM',
          formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName,
        }
      },
      y: { 
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => 'Number of antibiotics prescribed:'
        }
      },
    },
    colors: [
      '#26734D',
      '#cc3311',

    ],
    legend: {
      show: false
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(0) + "%"
      },
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
  },
          },
    plotOptions: {
       pie: {
      customScale: 0.7,
      donut: { labels: { show: false } },
      dataLabels: {
      offset: -20,
    },
    }
    },
  });    

  return (
    <Card sx={{boxShadow: 'none', mt: 4}}> 
      <br />
      <br />
      <br />
      <Typography variant="h4" color='#22577A'>Antibiotic Prescriptions</Typography> 
      <Typography variant="subtitle3" color='#26734D' sx={{fontWeight: 'bold'}}>Green antibiotics </Typography><Typography variant='subtitle3' color='#22577a'>are  more effective, have fewer side effects and are less likely to lead to resistant infections.</Typography>
      <br />
      <Typography variant="subtitle3" color='#cc3311' sx={{fontWeight: 'bold'}}>Red antibiotics </Typography><Typography variant='subtitle3' color='#22577a'>should not be used in primary care unless absolutely necessary.</Typography>
      <br />
      <br />      
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={3} mt={1}>
      <Box sx={{ mx: 1, width:200, height: 300 }} dir="ltr">
        <ReactApexChart type="pie" 
        series={ABPractice} 
        options={chartOptionsComparisons} 
        height={300} 
        />
      <Typography variant="subtitle2" align='center' >Your practice</Typography>     
      </Box>
      <Box sx={{ mx: 1, width:200, height: 300 }} dir="ltr">
        <ReactApexChart type="pie" 
        series={ABOtherPractices} 
        options={chartOptionsComparisons} 
        height={300} 
        />
        <Typography variant="subtitle2" align='center'>Filtered practices</Typography>
      </Box>
      </Stack>

    </Card>
  );
}
