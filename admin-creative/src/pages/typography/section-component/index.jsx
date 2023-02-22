import React from "react";
import './style.scss';

const TypographySection = ({ typoTitle, typoDescript, fontSize, color, bold }) => {

    return <div className="type-style">
        <p className="title">{typoTitle}</p>
        <p className="description"
            style={{ fontSize, color, fontWeight: bold }}>{typoDescript}</p>
    </div>
}
export default TypographySection