import React from "react";
import ReactApexChart from 'react-apexcharts';

const SplineChart = () => {

    const state = {
        series: [{
            name: 'Open',
            data: [31, 40, 65, 51, 75, 109, 100]
        },
        {
            name: 'Click',
            data: [11, 32, 45, 47, 54, 52, 95]
        },
        {
            name: 'Click Second Time',
            data: [8, 29, 35, 39, 44, 42, 65]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    };


    return <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
    </div>

}
export default SplineChart
// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
