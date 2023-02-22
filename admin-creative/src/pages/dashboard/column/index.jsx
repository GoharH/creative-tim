import React from "react";
import ReactApexChart from 'react-apexcharts';


const ColumnChart = () => {


    const state = {

        series: [{
            name: 'Tesla Model S',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'BMW 5 Series',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },


    };
    return <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
}



export default ColumnChart