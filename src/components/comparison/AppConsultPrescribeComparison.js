import { Card, Stack, Box, Typography } from '@mui/material';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useLoaderData } from 'react-router';

import BaseOptionChart from '../../charts/BaseOptionChart';






export default function AppConsultPrescribeComponent(props) {

  const {presbody , consultBody} = props.values;

  const presMax = Math.max(presbody.yourPrescriptions,
     presbody.yourAntibioticPrescriptions,
     presbody.filterPrescriptions,
      presbody.filterAntibioticPrescriptions) +500;
  const consultMax = Math.max(
    consultBody.yourConsultations, consultBody.yourAntibioticConsultations,
    consultBody.filterConsultations, consultBody.filterAntibioticConsultations
  ) +500;


  const CHART_DATA_Consultations = [{
    name: 'Your practice',
    data: [consultBody.yourConsultations, consultBody.yourAntibioticConsultations],
    color: '#3E8397'},
  {
    name: 'Filtered practices average',
    data: [consultBody.filterConsultations, consultBody.filterAntibioticConsultations],
    color: '#6eb1c4'}
      ]
  const CHART_DATA_Prescriptions = [{
    name: 'Your practice',
    data: [presbody.yourPrescriptions, presbody.yourAntibioticPrescriptions],
    color: '#3E8397'},
  {
    name: 'Filtered practices average',
    data: [presbody.filterPrescriptions, presbody.filterAntibioticPrescriptions],
    color: '#6eb1c4'}
      ]
  // console.log(`value of events ${events}`)
  const chartOptions_ConsultPrescribe = merge(BaseOptionChart(), {
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
        //formatter: (seriesName) => 'TOTAL'/100*fNumber(seriesName),
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
          formatter: (seriesName) => `Percentage of total: `
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
      position: 'top',
      
    },
      columnWidth: '80%',
      distributed: false,
  },
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff']
    },
    offsetY: 10
  },
    xaxis: {
      categories: [
        'Consultations', 
        ['Consultations resulting','in an antibiotic prescription']
      ],
      labels: {
      rotate: 0
    }
    },
    yaxis: {
      show: false,
      min: 0,
      max: consultMax,
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
        //formatter: (seriesName) => 'TOTAL'/100*fNumber(seriesName),
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
          formatter: (seriesName) => `Percentage of total: `
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
      columnWidth: '80%',
      distributed: false,
  },
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff']
    },
    offsetY: 10
  },
    xaxis: {
      categories: [
        'Prescriptions', 
        'Antibiotic prescriptions'
      ],
      labels: {
      rotate: 0
    }
    },
    yaxis: {
      show: false,
      min: 0,
      max: presMax,
    },
stroke: {
                show: false,
              },
     
  });


  return (
    <Card  sx={{boxShadow: 'none', mt: 4}}>
    <br />
    <br />
    <br />
    <Typography variant='h4' color='#22577A'>Antibiotic consultations and prescriptions</Typography>
        <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={6} mt={1}>
        <Box sx={{ mx: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_Consultations} options={chartOptions_ConsultPrescribe} height={480} />
        </Box>
        <Box sx={{ mx: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_Prescriptions} options={chartOptions_Prescribe} height={480} />
        </Box>
        </Stack>
    </Card>
  );
}


