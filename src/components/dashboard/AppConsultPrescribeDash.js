import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Stack, Box, Typography } from '@mui/material';

import BaseOptionChart from '../../charts/BaseOptionChart';

// ----------------------------------------------------------------------





function AppConsultPrescribeDash(props) {
 


  const CHART_DATA_Consultations = [{
    data: [{
        x: 'All consultations',
        y: props.con,
      }, {
        x: 'Antibiotics',
        y: props.conAnt,
      }],
  }]
  
  const CHART_DATA_Prescriptions = [{
    data: [{
        x: 'All prescriptions',
        y: props.pres,
      }, {
        x: 'Antibiotics',
        y: props.presAnt,
      }],
  }]

  const chartOptions_Consultations = merge(BaseOptionChart(), {
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
        formatter: function(value, opts) {
             
          if(opts.seriesIndex == 0){
            const sum = opts.series[0].reduce((a, b) => a + b, 0);
            const percent = (value / sum) * 100;
            return percent.toFixed(0) + '%'
          }
          if(opts.seriesIndex == 1){
            const sum = opts.series[1].reduce((a, b) => a + b, 0);
        
            const percent = (value / sum) * 100;
            return percent.toFixed(0) + '%'
          }
          },
        title: {
          formatter: (seriesName) => `Percentage of consultations: `
        }
      },
    },
    grid: {
      borderColor: "transparent",
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    colors: [
      '#3E8397',
    ],
    plotOptions: {
      bar: 
      {horizontal: false,
      dataLabels: {
      position: 'top'
    },
      columnWidth: '80%',
      distributed: false,
  },
  },
  legend: {
    show: false
  },
    //labels should show total number
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff'],
        fontWeight: 'bold'
    },
    offsetY: 10
  },
    yaxis: {
      show: false,
      min: 0,
      max: props.con +10000,
    },
stroke: {
                show: false,
              },
  });
  const chartOptions_Prescribe = merge(BaseOptionChart(), {
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
        formatter: function(value, opts) {
             
          if(opts.seriesIndex == 0){
            const sum = opts.series[0].reduce((a, b) => a + b, 0);
            const percent = (value / sum) * 100;
            return percent.toFixed(0) + '%'
          }
          if(opts.seriesIndex == 1){
            const sum = opts.series[1].reduce((a, b) => a + b, 0);
            const percent = (value / sum) * 100;
            return percent.toFixed(0) + '%'
          }
          },
        title: {
          formatter: (seriesName) => `Percentage of prescriptions: `
        }
      },
    },
    grid: {
      borderColor: "transparent",
      row: {
        colors: ["transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    colors: [
      '#3E8397',
    ],
    plotOptions: {
      bar: 
      {horizontal: false,
      dataLabels: {
      position: 'top'
    },
      columnWidth: '80%',
      distributed: false,
  },
  },
  legend: {
    show: false
  },
  //labels should show total number
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff'],
        fontWeight: 'bold'
    },
    offsetY: 10
  },
    yaxis: {
      show: false,
      min: 0,
      max: props.pres +10000,
    },
stroke: {
                show: false,
              },
  });



  return (
    <Card sx={{boxShadow: 'none'}}>
   
    <Typography variant='h4' mt={10} color='#22577A'>Antibiotic consultations and prescriptions in the previous 12 months.</Typography>
        <br />
        <br />
        <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={6} mt={1}>
        <Box sx={{ mx: 1 }} dir="ltr">
          {/* {console.log(CHART_DATA_Consultations)} */}
        <ReactApexChart type="bar" series={CHART_DATA_Consultations} options={chartOptions_Consultations} height={480} />
      
        </Box>
        <Box sx={{ mx: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_Prescriptions} options={chartOptions_Prescribe} height={480} />
        </Box>
        </Stack>
    </Card>
  );
}


 
 export default AppConsultPrescribeDash;
