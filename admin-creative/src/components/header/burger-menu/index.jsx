import React, { useState } from "react";
import './style.scss';

const BurgerMenu = () => {
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

    return <div className="burger-menu-section">
        <nav>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
        </nav>
        <div className={menu_class}>ggg</div>
    </div>
}
export default BurgerMenu