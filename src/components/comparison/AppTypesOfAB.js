import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import { useState } from 'react';
// utils

//



// ----------------------------------------------------------------------

const CHART_DATA_RED = [{
    name: 'Ciprofloxacin',
    data: [93, 121]
    }, 
    {
      name: 'Azithromyzin',
      data: [29, 55]
    }, 
    {
      name: 'Co-amoxiclav', 
      data: [79, 15]
    }, 
];  



export default function AppTypesOfAB(props) {
  const list = props.values;
  const red =list.filter(e=> e.color === 'Red');
  const green= list.filter(e=> e.color ==='Green');

 const [series, setSeries]=useState(null);

const greenls = [];
  for(const greenList of green){
    greenls.push({
      name: greenList.name,
      data: [greenList.yourCount, greenList.filterCount],
    })
  }
const redls = [];
for(const redList of red){
  redls.push({
    name: redList.name,
    data: [redList.yourCount, redList.filterCount],
  })
}

const gr = greenls.slice(0,4);





  const CHART_DATA_GREEN = [{
    name: 'Amoxicillin',
    data: [135, 56],
  }, 
  {
    name: 'Doxycycline',
    data: [85, 110],
   }, 
  {
    name: 'Penicillin V',
    data: [23, 0],
  }, 
  {
    name: 'Cephalexin',
    data: [64, 86],
  } ];  
  const chartOptionsTypes = merge({}, {
    tooltip: {
      marker: { show: false },
      x: {
          show: true,
          // format: 'dd MMM',
          formatter: undefined,
        title: {
          formatter: (seriesName) => {
            console.log(seriesName)
            return seriesName},
        }
      },
      y: { 
        //formatter: (seriesName) => 'TOTAL'/100*fNumber(seriesName),
        formatter: function(value, opts) {
          // console.log(opts)
              const sum = opts.series[0].reduce((a, b) => a + b, 0);
              const percent = (value / sum) * 100;
              return percent.toFixed(0) + '%'
          },
        title: {
          formatter: (seriesName) => {
           
           return seriesName+':';
          }
        }
      },
    },
  chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          height: 350,
        },
  colors: ["#26734D", "#339966", "#40bf80", "#66cc99", "#8cd9b3"],
   
  stroke: {
    show: true,
    colors: "#cc3311",
    width: 10,
  },
    plotOptions: {
      bar: { 
        borderRadius: 4,
        columnWidth: "60%",
        horizontal: false,
        dataLabels: {
                    total: {
                      enabled: true,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    },
                    formatter: function(value, { seriesIndex, dataPointIndex, w }) {
    return w.config.series[seriesIndex].name + ":  " + value
  }
                  },
                },
},
dataLabels:{

enabled: true ,
formatter: function (val, { seriesIndex, dataPointIndex, w }) {
  if(w.config.series[seriesIndex].name.length > 17){
    return w.config.series[seriesIndex].name.substring(0,17)+ "....."
   }
  return w.config.series[seriesIndex].name
},
style: {
  fontSize: '13px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
 
},
},
legend: {
  show: false
},
 xaxis: {
      type: 'category',
      categories: ["Your practice", "Filtered practices"],
      labels: {
        show: true
      }
      },
    yaxis: {
      max: 150,
      categories: [" blah "],
      tickAmount: 1,
      labels: {
        show: false,
        style: {
          colors: '#22577A'
        }
      }},
      grid: {
        show: false
      }
  });

const chartOptionsTypes_RED = merge({}, {
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
              const sum = opts.series[0].reduce((a, b) => a + b, 0);
              const percent = (value / sum) * 100;
           
              
              return percent.toFixed(0) + '%'
          },
        title: {
          formatter: (seriesName) => seriesName+':'
        }
      },
    },
  chart: {
          type: 'bar',
          stacked: true,
          stackType: '100%',
          height: 350,
        },
  colors: ["#cc3311", "#ec3b13", "#f06242", "#f48971", "#f7b1a1"],
   
  stroke: {
    show: true,
    colors: "#cc3311",
    width: 10,
  },
    plotOptions: {
      bar: { 
        borderRadius: 4,
        columnWidth: "60%",
        horizontal: false,
        dataLabels: {
                    total: {
                      enabled: true,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    },
                    formatter: function(value, { seriesIndex, dataPointIndex, w }) {
    return w.config.series[seriesIndex].name + ":  " + value
  }
                  },
                },
},
dataLabels:{

  enabled: true ,
  formatter: function (val, { seriesIndex, dataPointIndex, w }) {
    if(w.config.series[seriesIndex].name.length > 17){
      return w.config.series[seriesIndex].name.substring(0,17)+ "....."
     }
    return w.config.series[seriesIndex].name
  },
  textAnchor: 'middle',
  distributed: false,
  style: {
    fontSize: '13px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 'bold',
   
  },
  },
legend: {
  show: false
},

 xaxis: {
      type: 'category',
      categories: ["Your practice", "Filtered practices"],
      labels: {
        show: true
      }
      },
    yaxis: {
      max: 150,
      tickAmount: 1,
      labels: {
        show: false,
        style: {
          colors: '#22577A'
        }
      }},
      grid: {
        show: false
      }
  });

  return (
    <Card  sx={{boxShadow: 'none', mt: 4}}> 
     

      <Typography variant="h6" mt={16} color='#22577A'>Breakdown of antibiotic prescriptions.</Typography>  
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={6} mt={1}>
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" 
        series={gr} 
        options={chartOptionsTypes} 
        />
      </Box>
       <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" 
        series={redls} 
        options={chartOptionsTypes_RED} 
        />
      </Box>
      </Stack >
    </Card>
  );
}
