import React from "react"
import './style.scss'
const CustomInput = ({ label, className, error, errorText, name, value, onChange, type = 'text', disabled, placeholder }) => {

    const handleChange = (e) => {
        onChange(e)
    }

    return <>
        <div className="input-sec">
            <label className="input-title">{label}</label>
            <input type={type} className={className} value={value} name={name} onChange={handleChange} disabled={disabled} placeholder={placeholder} />

            {error ? <p className="error-text">{errorText}</p> : null}
        </div>
    </>
}
export default CustomInput