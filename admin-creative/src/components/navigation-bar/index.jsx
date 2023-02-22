import React, { useState } from "react";
import './style.scss';
import { NavLink } from "react-router-dom";
import navBarImg from '../../assets/images/nav-bar.jpg';

const NavigationBar = () => {

    const [navBarItem] = useState([
        {
            title: "dashboard",
            imgClassName: "icon-pie-chart",
            path: "/dashboard"
        },
        {
            title: "user profile",
            imgClassName: "icon-user",
            path: "/user-profile"
        },
        {
            title: "table list",
            imgClassName: "icon-checklist",
            path: "/table-list"
        },
        {
            title: "typography",
            imgClassName: "icon-news-paper",
            path: "/typography"
        },
        {
            title: "icons",
            imgClassName: "icon-react",
            path: "/icons"
        },
        {
            title: "maps",
            imgClassName: "icon-location",
            path: "/maps"
        },
        {
            title: "notifications",
            imgClassName: "icon-notification-bell",
            path: "/notifications"
        }
    ])


    return <section className="nav-bar-section" style={{ backgroundImage: `url(${navBarImg})` }}>
        <div className="cover">
            <div className="G-wrapper">
                <div className="nav-bar-header">
                    <h3>Creative tim</h3>
                </div>
                <div className="nav-bar-container">
                    <div>
                        <ul className="nav-bar-list">
                            {navBarItem.map((item, index) => {
                                return <NavLink to={item.path} className="nav-bar-item G-flex" key={index}>
                                    <span className={item.imgClassName}></span>
                                    <p>{item.title}</p>
                                </NavLink>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default NavigationBar