import React from "react";
import ReactApexChart from 'react-apexcharts';

const ApexPieChart = () => {
    const state = {
        series: [53, 36, 11],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Open', 'Bounce', 'Unsubscribe'],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
        </div>
    );
}
export default ApexPieChart