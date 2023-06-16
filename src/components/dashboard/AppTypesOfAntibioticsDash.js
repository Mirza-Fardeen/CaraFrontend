import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
// utils
import { fNumber } from '../../utility/formatNumber';
//
import BaseOptionChart from '../../charts/BaseOptionChart';



// ----------------------------------------------------------------------

const CHART_DATA = [{
    data: [{
      x: 'Amoxicillin',
      y: 55,
      fillColor: "#26734D", 
      strokeColor: "#26734D",
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 160,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Doxycycline',
      y: 15,
      fillColor: '#26734D',
      strokeColor: '#26734D',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 100,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Ciprofloxacin',
      y: 5,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 60,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Penicillin V',
      y: 5,
      fillColor: '#26734D',
      strokeColor: '#26734D',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 40,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Azithromyzin',
      y: 3,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 35,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Co-amoxiclav', 
      y: 10,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 65,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    }, {
      x: 'Cephalexin',
      y: 7,
      fillColor: '#26734D',
      strokeColor: '#26734D',
  //     goals: [
  //   {
  //     name: 'Regional Average',
  //     value: 40,
  //     strokeColor: '#775DD0',
  //   }
  // ]
    } ]
  }];  
const TOTAL = '1,890';

function AppTypesOfAntibioticsDash(props) {
  const chartOptionsTypes = merge(BaseOptionChart(), {
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
          formatter: (seriesName) => `Percentage of total: `
        }
      },
    },
    plotOptions: {
      bar: { horizontal: true,
  dataLabels: {
      position: 'top'
    },}
},
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff']
    },
  }, 
    xaxis: {
      min :0,
      max : 100,
      tickAmount: 4,
      title: {
            text: "%"
          },
      labels: {
        show: true,
        style: {
          colors: '#22577A'
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#22577A'
        }
      }},
    chart: {
      id: 'ABBreakdown',
    }  
  });

//your practice green and red total number of ab prescriptions
const ABPractice = [100, 20]

//all practices green and red total number of ab prescriptions
const ABHospital = [125, 15]

const ABLocation = [250, 80]

const ABAgeProfile = [150, 150]



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
        formatter: function(value, opts) {
             return value + ''
          },
        title: {
          formatter: (seriesName) => 'Total number of antibiotics prescribed:'
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

const CHART_DATA_Resist = [{


    data: [{
      x: 'Amoxicillin',
      y: 75,
      fillColor: "#26734D",
      strokeColor: "#26734D",
    }, {
      x: 'Doxycycline',
      y: 5,
      fillColor: '#26734D',
      strokeColor: '#26734D',
      }, {
      x: 'Ciprofloxacin',
      y: 85,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
    }, {
      x: 'Penicillin V',
      y: 23,
      fillColor: '#26734D',
      strokeColor: '#26734D',
    }, {
      x: 'Azithromyzin',
      y: 79,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
    }, {
      x: 'Co-amoxiclav', 
      y: 100,
      fillColor: '#cc3311',
      strokeColor: '#cc3311',
    }, {
      x: 'Cephalexin',
      y: 45,
      fillColor: '#26734D',
      strokeColor: '#26734D'
    } ] 
  }];  

  const chartOptionsResist = merge(BaseOptionChart(), {
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
          formatter: (seriesName) => fNumber(seriesName) + "%",

        title: {
          formatter: (seriesName) => `Percentage of isolates showing resistance: `
        }
      },
    },
    chart: {
          type: 'bar',
          height: 350,
          stacked: false,
          stackType: '100%'
        },
    plotOptions: {
      bar: { horizontal: true,
  dataLabels: {
      position: 'top'
    },}
},
  dataLabels: {
    enabled: true,
    style: {
        colors: ['#fff']
    },
        // offsetX: 50,
  }, 
    xaxis: {
      min :0,
      max: 100,
      tickAmount: 4,
       title: {
            text: "%"
          },
      labels: {
        show: true,
        style: {
          colors: '#22577A',
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#22577A'
        }
      }}
  });
  const abPracticeGreen = 1200;
  const abPracticeRed = 500;

  const abHospitalGreen = props.green;
  const abHospitalRed = props.red;
  const pre= CHART_DATA.map(({data}) => data);
  const res = CHART_DATA_Resist.map(({data})=> data)

  let types_prescribed_ordered = pre[0].sort(function(a, b){return b.y - a.y })

  return (
    <Card sx={{boxShadow: 'none'}}> 
      <br />
      <br />
      <br />
      <Typography variant="h4" color='#22577A'>Antibiotic Prescriptions</Typography> 
      <Typography variant="subtitle3" color='#26734D' sx={{fontWeight: 'bold'}}>Green Antibiotics </Typography><Typography variant='subtitle3' color='#22577a'>are  more effective, have fewer side effects and are less likely to lead to resistant infections.</Typography>
      <br />
      <Typography variant="subtitle3" color='#cc3311' sx={{fontWeight: 'bold'}}>Red Antibiotics </Typography><Typography variant='subtitle3' color='#22577a'>should not be used in primary care unless absolutely necessary.</Typography>
      <br />
      <br />
      <br />
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={3} mt={1}>
      <Box sx={{ mx: 1, width:200, height: 300 }} dir="ltr">
        <ReactApexChart type="pie" 
        series={[abPracticeGreen, abPracticeRed]} 
        options={chartOptionsComparisons} 
        height={300} 
        />
      <Typography variant="subtitle2" align='center' >Your practice</Typography>     
      </Box>
      <Box sx={{ mx: 1, width:200, height: 300 }} dir="ltr">
        <ReactApexChart type="pie" 
        series={[abHospitalGreen, abHospitalRed]} 
        options={chartOptionsComparisons} 
        height={300} 
        />
        <Typography variant="subtitle2" align='center'>All practices average</Typography>
      </Box>
      </Stack>

      <Typography variant="h6" mt={16} color='#22577A'> Breakdown of antibiotic prescriptions and resistance in your practice</Typography>  
      <Stack direction="row" justifyContent="space-evenly" alignItems="flex-end" spacing={6} mt={1}>
      <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr">
      <br />
      <Typography variant="subtitle3" color="#22577A">  Total number prescribed in the previous 12 months:</Typography> <Typography variant="subtitle3" color="#AA3377" sx={{fontWeight: 'bold'}}>{TOTAL}</Typography>
        <ReactApexChart type="bar" 
        series={[{data:types_prescribed_ordered }]} 
        options={chartOptionsTypes} 
        />
      </Box>
       <Box sx={{ mx: 1, width: 500, height: 400 }} dir="ltr" id="resistance">
      <Typography variant="subtitle3" color='#22577a'> % resistance in isolates from urine samples to at least one antibiotic. </Typography>      
        <ReactApexChart type="bar" 
        series={[{data:res[0].sort(function(a, b){return types_prescribed_ordered.map(m=>m.x).indexOf(a.x) - types_prescribed_ordered.map(m=>m.x).indexOf(b.x) })}]}  
        options={chartOptionsResist} 
        />
      </Box>
      </Stack >

    </Card>
  );
}

// import { connect } from "react-redux";
// const mapState = state => ({
//   ab: state.antibiotics.ab
//  });
 
//  const mapDispatch = ({ 
//   antibiotics: {getGeneralAB}}) => ({
//     getGeneralAB: () => getGeneralAB()
//  });
 
 export default AppTypesOfAntibioticsDash;
