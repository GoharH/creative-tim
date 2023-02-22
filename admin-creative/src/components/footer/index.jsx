import React from "react";
import './style.scss';

const Footer = () => {

    return <section className="footer-section G-flex">

        <ul className="header-icons G-flex">
            <li>
                <p>Home</p>
            </li>
            <li>
                <p>Company</p>
            </li>
            <li>
                <p>Portfolio</p>
            </li>
            <li>
                <p>Blog</p>
            </li>
        </ul>
        <div className="header-links G-center">
            <p>© 2023 <span className="G-blue-color">Creative Tim</span>, made with love for a better web</p>
        </div>

    </section>
}
export default Footer