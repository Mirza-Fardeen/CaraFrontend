import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, Typography, Stack } from "@mui/material";
import { fNumber } from "../../utility/formatNumber"; 

//
import BaseOptionChart from "../../charts/BaseOptionChart";

// ----------------------------------------------------------------------


export default function AppLineAB() {

  const CHART_DATA_Week_GREEN = [{
    name: ['Your practice'],
    data: [653,833, 564, 455, 760],
    color: '#26734D'},{
    name: ['Filtered practices'],
    data: [553,713, 656, 487, 560],
    color: '#39ac73'    
  }];  

  const CHART_DATA_Week_RED = [{
    name: ['Your practice'],
    data: [353,133, 56, 87, 156],
    color: '#cc3311'},{
    name: ['Filtered practices'],
    data: [300, 100, 80, 80, 100],
    color: '#f2765a'    
  }];  

  const chartOptionsWeek = merge(BaseOptionChart(), {
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
        title: {
          formatter: (seriesName) => 'Antibiotic prescriptions for this weekday:'
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
    enabled: false,
    style: {
        colors: ['#708090']
    },
    offsetY: -20
  },
    
    yaxis: {
      show: false,
    },
    xaxis: {
      categories: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri']
    },
stroke: {
                show: false,
              },
    legend: {
      show: true,
      position: 'bottom'
    }
  });

  const CHART_DATA_Duration_GREEN = [{
    name: ['Your practice'],
    data: [66,53,8,13,3,47,20],
    color: '#26734D'},
    {
    name: ['Filtered practices'],
    data: [60,40,15,15,0,55,15],
    color: '#39ac73'}
  ];
  const CHART_DATA_Duration_RED = [{
    name: ['Your practice'],
    data: [10,30,45,15,0,5,5],
    color: '#cc3311'},
    {
    name: ['Filtered practices'],
    data: [15, 20, 55, 0, 10, 15, 0],
    color: '#f2765a'}
  ];  

  const chartOptionsDuration = merge(BaseOptionChart(), {
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
          formatter: (seriesName) => 'Antibiotic prescriptions for this number of days:'
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
      columnWidth: '75%',
  },
  chart: {
    id: "chart1"
  }
  },
  dataLabels: {
    enabled: false,
    style: {
        colors: ['#708090']
    },
    offsetY: -20
  },
    xaxis: {
      categories: [
        'Once', 
        '2 Days',
        '3 Days',
        '4 Days',
        '5 Days',
        '6 Days',
        ['More', 'than', '6 days']
      ],
      rotate: 0,
    },
    yaxis: {
      show: false,
    },
    fill: {
  colors: ['#339966']
},
stroke: {
                show: false,
              },
legend: {
  show: true,
    position: "bottom",
     labels: {
        colors: ['#339966', '#990000']
      },
      brush:{
            target: 'chart2',
            enabled: true
          },
  },              
// strokeColor: ['transparent'],
  });


  return (
    <Card sx={{boxShadow: 'none', mt: 4}} >
      <Typography variant="h4" color='#22577A'>Prescriptions of green and red antibiotics over time</Typography>
      <br />
      <Typography variant="h6" color='#22577A'>Per weekday</Typography>  
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={3} mt={10}>
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_Week_GREEN} options={chartOptionsWeek} height={300} />
      </Box>
       <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA_Week_RED} options={chartOptionsWeek} height={300} />
      </Box>
      </Stack>
      <br/>
      <br/>
      <Typography variant="h6" color='#22577A'>Duration</Typography>  
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={3} mt={10}>      
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
      <ReactApexChart type="bar" series={CHART_DATA_Duration_GREEN} options={chartOptionsDuration} height={364} />
      </Box>
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
      <ReactApexChart type="bar" series={CHART_DATA_Duration_RED} options={chartOptionsDuration} height={364} />
      </Box>
      </Stack>
      
    </Card>

);
}
