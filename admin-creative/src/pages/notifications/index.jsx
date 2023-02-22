import React from "react";
import NotifComponent from "./notif-component";
import './style.scss';

const Notification = () => {
    return <div className="G-section-container">
        <div className="G-page-title-part">
            <h3 className="G-page-title">Notifications</h3>
            <p className="G-page-subTitle">Handcrafted by our friend <span className="G-blue-color">Robert McIntosh</span>. Please checkout the <span className="G-blue-color">full documentation</span>.</p>
        </div>
        <div className="G-flex">
            <div className="G-padding-50">
                <p className="G-page-subTitle">Notifications Style</p>
                {/* <div className="notif-boxes">
                    <NotifComponent
                        description='This is a plain notification'
                    />
                    <NotifComponent
                        description='This is a notification with close button.'
                    />
                    <NotifComponent
                        description='This is a notification with close button and icon.'
                    />
                    <NotifComponent
                        description='This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you dont have to worry about the style.'
                    />
                </div> */}
                <div className="notif-boxes">
                    <div className="notification-box" >
                        <p>This is a plain notification</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box" >
                        <p>This is a notification with close button.</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box" >
                        <span className="icon-notification-bell"></span>
                        <p>This is a notification with close button and icon.</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box height" >
                        <span className="icon-notification-bell"></span>
                        <p className="line-height">
                            This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.
                        </p>
                        <span className="notif-close G-center">x</span>
                    </div>
                </div>
            </div>
            <div className="G-padding-50">
                <p className="G-page-subTitle">Notification States </p>
                {/* <div >
                    <NotifComponent
                        description='Primary - This is a regular notification made with ".alert-primary"'
                    />
                    <NotifComponent
                        description='Info - This is a regular notification made with ".alert-info"'
                    />
                    <NotifComponent
                        description='Success - This is a regular notification made with ".alert-success"'
                    />
                    <NotifComponent
                        description='Warning - This is a regular notification made with ".alert-warning"'
                    />
                    <NotifComponent
                        description='Danger - This is a regular notification made with ".alert-danger"'
                    />
                </div> */}
                <div>
                    <div className="notification-box bg-blue" >
                        <p>Primary - This is a regular notification made with ".alert-primary"</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box" >
                        <p>Info - This is a regular notification made with ".alert-info"</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box bg-green" >
                        <p>Success - This is a regular notification made with ".alert-success"</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box bg-orange" >
                        <p>Warning - This is a regular notification made with ".alert-warning"</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                    <div className="notification-box bg-red" >
                        <p>Danger - This is a regular notification made with ".alert-danger"</p>
                        <span className="notif-close G-center">x</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="notification-place-buttons">
            <div className="G-page-title-part">
                <h3 className="G-page-title">Notifications Places</h3>
                <p className="G-page-subTitle">Click to view notifications</p>
            </div>
            <div className="notification-place">
                <div className="G-flex">
                    <button className="notif-place-btn">Top Left</button>
                    <button className="notif-place-btn">Top Center</button>
                    <button className="notif-place-btn">Top Right</button>
                </div>
                <div className="G-flex">
                    <button className="notif-place-btn">Bottom Left</button>
                    <button className="notif-place-btn">Bottom Center</button>
                    <button className="notif-place-btn">Bottom Right</button>
                </div>
            </div>
            <h3 className="G-page-title">Modal</h3>
            <button className="modal-btn">Launch Modal Mini</button>
        </div>
    </div>
}
export default Notification
