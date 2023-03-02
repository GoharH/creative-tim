import React, { useState } from "react";
import './style.scss';
import { PieChart } from 'react-minimal-pie-chart';
import ApexPieChart from './pie-chart';
import StrackedChart from './stracked-chart';
import SplineChart from './spline';
import ColumnChart from './column';
import Task from "./tasks-component";
import PageContainer from "../../components/page-container";


const Dashboard = () => {
    const [task] = useState([
        { description: 'What are conference organizers afraid of?' },
        { description: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { description: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' },
        { description: 'Create 4 Invisible User Experiences you Never Knew About' },
        { description: 'Read "Following makes Medium better"' },
        { description: 'Unfollow 5 enemies from twitter' },
    ])
    return <PageContainer title={'Dashboard'}>
        <div className="G-flex charts">
            <div className="G-section-container pie-chart-sec">
                <div className="G-page-title-part">
                    <h3 className="G-page-title">Email Statistics</h3>
                    <p className="G-page-subTitle">Last Campaign Performance</p>
                </div>
                <div className="pie-chart">
                    {/* <div>
                        <PieChart
                            data={[
                                { title: 'Open', value: 53, color: '#1dc7ea', balance: '53' },
                                { title: 'Bounce', value: 36, color: '#fb404b' },
                                { title: 'Unsubscribe', value: 11, color: '#ff9500' },
                            ]}
                        />
                        <div className="G-flex">
                            <div className="chart-labels G-flex">
                                <span className="label-circle color-blue"></span>
                                <p>Open</p>
                            </div>
                            <div className="chart-labels G-flex">
                                <span className="label-circle color-red"></span>
                                <p>Bounce</p>
                            </div>
                            <div className="chart-labels G-flex">
                                <span className="label-circle color-orange"></span>
                                <p>Unsubscribe</p>
                            </div>
                        </div>
                    </div> */}
                    <ApexPieChart />
                </div>
                <p className="chart-updates"> Campaign sent 2 days ago</p>
            </div>
            <div className="G-section-container line-chart-sec">
                <div className="G-page-title-part">
                    <h3 className="G-page-title">Users Behavior</h3>
                    <p className="G-page-subTitle">24 Hours performance</p>
                </div>
                <div className="s-chart">
                    {/* <StrackedChart /> */}
                    <SplineChart />
                </div>
            </div>
        </div>
        <div className="G-flex column-task">
            <div className="G-section-container column-chart-sec">
                <div className="G-page-title-part">
                    <h3 className="G-page-title">2022 Sales</h3>
                    <p className="G-page-subTitle">All products including Taxes</p>
                </div>
                <div className="column-chart">
                    <ColumnChart />
                </div>
                <p className="chart-updates">  Data information certified</p>
            </div>
            <div className="G-section-container tasks-sec">
                <div className="G-page-title-part">
                    <h3 className="G-page-title">Tasks</h3>
                    <p className="G-page-subTitle">Backend development</p>
                </div>
                <div className="tasks">
                    {task.map((item, index) => {
                        return <Task description={item.description} key={index} />
                    })}
                </div>
                <p className="chart-updates"> Updated 3 minutes ago</p>
            </div>
        </div>
    </PageContainer>
}
export default Dashboard