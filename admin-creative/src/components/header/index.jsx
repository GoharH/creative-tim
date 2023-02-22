import React, { useState } from "react";
import BurgerMenu from "./burger-menu";
import './style.scss'

const Header = () => {
    // to change burger classes 
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    // toggle brger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return <section className="header-section G-flex">
        <div className="header-title">
            <h2>Icons</h2>
        </div>
        <div className="header-navigation G-flex">
            <ul className="header-icons G-flex">
                <li><span className="icon-paint-palette"></span></li>
                <li><span className="icon-planet"></span></li>
                <li className="G-flex"><span className="icon-search_black_24dp"></span><p className="nav-link">Search</p></li>
            </ul>
            <div className="header-links">
                <ul className="G-flex">
                    <li>
                        <a href="#">Account</a>
                    </li>
                    <li>
                        <a href="#">Dropdown</a>
                    </li>
                    <li>
                        <a href="#">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="burger-menu-section">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <ul className="header-icons-BM G-flex">
                    <li><span className="icon-paint-palette"></span></li>
                    <li><span className="icon-planet"></span></li>
                    <li className="G-flex"><span className="icon-search_black_24dp"></span><p className="nav-link">Search</p></li>
                </ul>
                <div className="header-links-BM">
                    <ul className="G-flex">
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">Dropdown</a>
                        </li>
                        <li>
                            <a href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <BurgerMenu /> */}
    </section>
}
export default Header