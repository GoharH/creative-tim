import React from "react";
import './style.scss';

const Map = () => {
    return <div className="map-section">
        <iframe className="map-style" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92181.08836767173!2d11.170756490294842!3d43.779936659876775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2z0KTQu9C-0YDQtdC90YbQuNGPLCDQmNGC0LDQu9C40Y8!5e0!3m2!1sru!2s!4v1676666421006!5m2!1sru!2s" loading="lazy" ></iframe>
    </div>
}
export default Map