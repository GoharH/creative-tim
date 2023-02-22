import React from "react";
import './style.scss';

const IconBox = ({ iconClass, iconName }) => {
    return <div className="icon-box">
        <span className={iconClass}></span>
        <p>{iconName}</p>
    </div>
}
export default IconBox