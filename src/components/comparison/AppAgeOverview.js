import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, Stack, CardHeader, Typography, Button } from '@mui/material';

import BaseOptionChart from '../../charts/BaseOptionChart';



// ----------------------------------------------------------------------



const CHART_DATA_GREEN = [{
    name: ['Your practice'],
    data: [6653,8133, 3445, 2176, 2070, 3465, 5789, 10300],
    color: '#26734D'},{
    name: ['Filtered practices'],
    data: [5353,7933, 3500, 2700, 2200, 3650, 5760, 10980],
    color: '#39ac73'}];
const CHART_DATA_RED = [{
    name: ['Your practice'],
    data: [353,133, 500, 700, 200, 650, 760, 980],
    color: '#cc3311'},{
    name: ['Filtered practices'],
    data: [253,233, 470, 690, 280, 750, 560, 580],
    color: '#f2765a'},];  


export default function AppAgeOverview() {

  const chartOptions_GREEN = merge(BaseOptionChart(), {
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
              const sum = opts.series[0].reduce((a, b) => a + b, 0);
              const percent = (value / sum) * 100;
              return percent.toFixed(0) + '%'
          },
        title: {
          formatter: (seriesName) => 'Percentage of all green antibiotic prescriptions: '
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
    plotOptions: {
      bar: 
      {horizontal: false,
      dataLabels: {
      position: 'top'
    },
      columnWidth: '60%',
  },
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#708090']
    },
    offsetY: -20
  },
    xaxis: {
      categories: [
        '<1', 
        '1-6',
        '6-12',
        '12-24',
        '24-50',
        '50-65',
        '65-70',
        'over 70'
      ]
    },
    yaxis: {
      show: false
    },
stroke: {
                show: false,
              },
legend: {
  show: true,
    position: "bottom",
  },              
  });

  const chartOptions_RED = merge(BaseOptionChart(), {
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
              const sum = opts.series[0].reduce((a, b) => a + b, 0);
              const percent = (value / sum) * 100;
              return percent.toFixed(0) + '%'
          },
        title: {
          formatter: (seriesName) => 'Percentage of all red antibiotic prescriptions: '
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
    plotOptions: {
      bar: 
      {horizontal: false,
      dataLabels: {
      position: 'top'
    },
      columnWidth: '60%',
  },
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#708090']
    },
    offsetY: -20
  },
    xaxis: {
      categories: [
        '<1', 
        '1-6',
        '6-12',
        '12-24',
        '24-50',
        '50-65',
        '65-70',
        'over 70'
      ]
    },
    yaxis: {
      show: false
    },
stroke: {
                show: false,
              },
legend: {
  show: true,
    position: "bottom",
  },              
  });

  return (
    <Card mt='-10'  sx={{boxShadow: 'none', mt: 4}}>
          <Typography variant="h6" mt={16} color='#22577A'>Antibiotic prescriptions by age group.</Typography>  
        <Box sx={{ mx: 1, borderRadius: 0 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_GREEN} options={chartOptions_GREEN} height={364}/>
      </Box>
      <br />
      <br />
        <Box sx={{ mx: 1, borderRadius: 0 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_RED} options={chartOptions_RED} height={364}/>
      </Box>
    </Card>
  );
}
