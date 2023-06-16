import { Fragment } from 'react';
import Chart from 'react-apexcharts';

function ChartDemo(){

    const charts = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          yaxis: {
            show: false
          },
          stroke: {
            show: false,
          },
          colors: [function({ value, seriesIndex, w }) {
            if (value < 55) {
                return '#7E36AF'
            } else {
                return '#D9534F'
            }
          }, function({ value, seriesIndex, w }) {
            if (value < 111) {
                return '#7E36AF'
            } else {
                return '#D9534F'
            }
          }]
         
        },
      
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91 , 100]
          }
        ]
      };
    return(
        <Fragment>
            {/* <form id='form' onSubmit={Submit} className={classes}>
            <input type='text' ref={firstValue}/>
            <input type='text' ref={secondValue}/>
            <button type="submit"> submit</button>
            </form> */}
            <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={charts.options}
                  series={charts.series}
                  type="bar"
                  width="500"
                />
              </div>
            </div>
          </div>
        </Fragment>
    ) 
}
export default ChartDemo;