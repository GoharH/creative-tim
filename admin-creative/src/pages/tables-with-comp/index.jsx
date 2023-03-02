import React, { useState } from "react";
import PageContainer from "../../components/page-container";
import './style.scss';
import TableCompo from "./table-component";

const TableWithComponent = () => {
    const [user] = useState([
        {
            color: '#e5e5e5',
            id: '1',
            userName: "Dakota Rice",
            salary: '$36,738',
            country: 'Niger',
            city: 'Oud-Turnhout',
        },
        {
            color: '#ffffff',
            id: '2',
            userName: "Minerva Hooper",
            salary: '	$23,789',
            country: 'Curacao',
            city: 'Sinaai-Waas',
        },
        {
            color: '#e5e5e5',
            id: '3',
            userName: "Sage Rodriguez",
            salary: '$56,142',
            country: 'Netherlands',
            city: 'Baileux',
        },
        {
            color: '#ffffff',
            id: '4',
            userName: "Philip Chaney",
            salary: '	$38,735',
            country: 'Korea, South',
            city: 'Overland Park',
        },
        {
            color: '#e5e5e5',
            id: '5',
            userName: "Doris Greene",
            salary: '	$63,542',
            country: 'Malawi',
            city: 'Feldkirchen in Karnten',
        },
        {
            color: '#ffffff',
            id: '6',
            userName: "Mason Porter",
            salary: '	$78,615',
            country: 'Chile',
            city: 'Gloucester',
        },
    ])
    return <PageContainer title={"Table List"}>
        <div className="G-section-container table-sec">
            <div className="G-page-title-part">
                <h3 className="G-page-title">Striped Table with Hover</h3>
                <p className="G-page-subTitle">Here is a subtitle for this table</p>
            </div>
            <div className="table-1">
                <div className="table-header">
                    <div className="width-79">ID</div>
                    <div className="width-300">Name</div>
                    <div className="width-166">Salary</div>
                    <div className="width-245">Country</div>
                    <div>City</div>
                </div>
                {user.map((item, index) => {
                    return <TableCompo key={index}
                        backgroundColor={item.color}
                        id={item.id}
                        userName={item.userName}
                        salary={item.salary}
                        country={item.country}
                        city={item.city} />
                })}
            </div>

        </div>
        <div className="table-2">
            <div className="G-page-title-part">
                <h3 className="G-page-title">Table on Plain Background</h3>
                <p className="G-page-subTitle">Here is a subtitle for this table</p>
            </div>
            <div >
                <div className="table-header">
                    <div className="width-79">ID</div>
                    <div className="width-300">Name</div>
                    <div className="width-166">Salary</div>
                    <div className="width-245">Country</div>
                    <div>City</div>
                </div>
                {user.map((item, index) => {
                    return <TableCompo key={index}
                        id={item.id}
                        userName={item.userName}
                        salary={item.salary}
                        country={item.country}
                        city={item.city} />
                })}
            </div>
        </div>
    </PageContainer>
}
export default TableWithComponent