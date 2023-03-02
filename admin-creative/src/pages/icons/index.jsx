import React, { useState } from "react";
import PageContainer from "../../components/page-container";
import IconBox from "./icon-box-component";
import './style.scss';


const Icons = () => {
    const [icon] = useState([{
        iconClass: 'icon-hotairballoon',
        iconName: 'nc-air-baloon',
    },
    {
        iconClass: 'icon-album-svgrepo-com',
        iconName: 'nc-album-2'
    },
    {
        iconClass: 'icon-ambulance',
        iconName: 'nc-ambulance'
    },
    {
        iconClass: 'icon-android-svgrepo-com',
        iconName: 'nc-android'
    },
    {
        iconClass: 'icon-apple',
        iconName: 'icon-apple'
    },
    {
        iconClass: 'icon-atom',
        iconName: 'nc-atom'
    },
    {
        iconClass: 'icon-backpack',
        iconName: 'nc-backpack'
    },
    {
        iconClass: 'icon-badge1',
        iconName: 'nc-badge'
    },
    {
        iconClass: 'icon-bank-1',
        iconName: 'nc-bank'
    },
    {
        iconClass: 'icon-badge-company-image',
        iconName: 'nc-badge-1'
    },
    {
        iconClass: 'icon-bag',
        iconName: 'nc-bag'
    },
    {
        iconClass: 'icon-bicycle',
        iconName: 'nc-bicycle'
    },
    {
        iconClass: 'icon-battery-twotone-0',
        iconName: 'nc-battery'
    },
    {
        iconClass: 'icon-birthday-cake',
        iconName: 'nc-birthday-cake'
    },
    {
        iconClass: 'icon-body',
        iconName: 'nc-body'
    },
    {
        iconClass: 'icon-bulb-light',
        iconName: 'nc-bulb-light'
    },
    {
        iconClass: 'icon-bulletin-journal-magazine1',
        iconName: 'nc-journal'
    },
    {
        iconClass: 'icon-bus-front',
        iconName: 'nc-bus-front'
    },
    {
        iconClass: 'icon-chat-round',
        iconName: 'nc-chat-round'
    },
    {
        iconClass: 'icon-cart',
        iconName: 'nc-cart'
    },
    {
        iconClass: 'icon-compass',
        iconName: 'nc-compass'
    },
    {
        iconClass: 'icon-car',
        iconName: 'nc-car'
    },
    {
        iconClass: 'icon-controller',
        iconName: 'nc-controller'
    },
    {
        iconClass: 'icon-credit-card',
        iconName: 'nc-credit-card'
    },
    {
        iconClass: 'icon-delivery-fast',
        iconName: 'nc-delivery-fast'
    },
    {
        iconClas: 'icon-flashlight',
        iconName: 'nc-flashlight'
    },
    {
        iconClass: 'icon-mic',
        iconName: 'nc-mic'
    },
    {
        iconClass: 'icon-location1',
        iconName: 'nc-location1'
    },
    {
        iconClass: 'icon-spaceship',
        iconName: 'nc-spaceship'
    },
    {
        iconClass: 'icon-umbrella',
        iconName: 'nc-umbrella'
    }
    ])
    console.log(icon[0].iconClass)
    return <PageContainer title={"Icons"}>
        <div className="G-section-container">
            <div className="G-page-title-part">
                <h3 className="G-page-title">100 Awesome Nucleo Icons</h3>
                <p className="G-page-subTitle">Handcrafted by our friends from <span className="G-blue-color">NucleoApp</span></p>
            </div>
            <div className="icon-boxes">
                {icon.map((item, index) => {
                    return <IconBox key={index}
                        iconClass={item.iconClass}
                        iconName={item.iconName} />
                })}
            </div>
        </div>
    </PageContainer>
}
export default Icons