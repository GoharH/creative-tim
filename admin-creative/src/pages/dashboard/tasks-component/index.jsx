import React from "react";
import './style.scss';

const Task = ({ description }) => {
    return <div className="task-box">
        <div className="G-flex">
            <span className="check-box"></span>
            {/* <input type="check" /> */}
            <p className="task-descript">{description}</p>
        </div>
        <div>
            <span className="icon-pencil2"></span>
            <span className="icon-cancel-circle"></span>
        </div>
    </div>
}
export default Task