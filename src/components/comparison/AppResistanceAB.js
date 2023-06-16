import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
// utils



// ----------------------------------------------------------------------

const CHART_DATA_RED = [{
    name: 'Ciprofloxacin',
    data: [93, 100]
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

const CHART_DATA_GREEN = [{
      name: 'Amoxicillin',
      data: [100, 56],
    }, 
    {
      name: 'Doxycycline',
      data: [85, 100],
     }, 
    {
      name: 'Penicillin V',
      data: [23, 0],
    }, 
    {
      name: 'Cephalexin',
      data: [64, 86],
    } ];  

export default function AppResistanceAB() {
  const chartOptionsTypes = merge({}, {
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
legend: {
  show: false,
  position: 'bottom'
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
      <br />
      <br />
      <br />
      <Typography variant="h6" color='#22577a'> Breakdown of antibiotic resistance.</Typography>   
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={6} mt={1}>
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" 
        series={CHART_DATA_GREEN} 
        options={chartOptionsTypes} 
        />
      </Box>
       <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
        <ReactApexChart type="bar" 
        series={CHART_DATA_RED} 
        options={chartOptionsTypes_RED} 
        />
      </Box>
      </Stack >
    </Card>
  );
}
