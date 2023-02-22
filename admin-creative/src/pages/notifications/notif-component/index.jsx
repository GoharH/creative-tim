import React from "react";
import './style.scss';

const NotifComponent = ({ description, bgColor }) => {

    return <div className="notification-box" style={{ backgroundColor: { bgColor } }}>
        <span className="icon-notification-bell"></span>
        <p>{description}</p>
        <span className="notif-close G-center">x</span>
    </div>
}
export default NotifComponent