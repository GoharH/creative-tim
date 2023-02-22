import React from "react";
import './style.scss';

const TableCompo = ({ backgroundColor, id, userName, salary, country, city }) => {

    return <div className="table-row G-flex" style={{ backgroundColor }}>
        <div className="width-79">{id}</div>
        <div className="width-300">{userName}</div>
        <div className="width-166">{salary}</div>
        <div className="width-245">{country}</div>
        <div>{city}</div>
    </div>
}
export default TableCompo