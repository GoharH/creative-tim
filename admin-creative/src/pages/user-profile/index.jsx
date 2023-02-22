import React, { useState } from "react";
import CustomInput from "../../components/input-component";
import './style.scss';
import img from '../../assets/images/photo-user.jfif';
import userImg from '../../assets/images/user.jpg';

const UserProfile = () => {
    const [user, setUser] = useState([
        {
            company: '',
            userName: '',
            mail: '',
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            postCode: '',
            about: ''
        },
    ])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

    }
    return <div className="user-profile-page G-flex">
        <div className="input-form G-section-container">
            <h3 className="G-page-title">Edit Profile</h3>
            <div className="input-labels">
                <div className="inputs-in-3 G-flex">
                    <CustomInput
                        label='Company'
                        className='input'
                        errorText='Input a Company'
                        name='company'
                        value={user.company}
                        // disabled='disable'
                        onChange={handleChange} />
                    <CustomInput
                        label='User Name'
                        className='input'
                        errorText='Input User Name'
                        name='userName'
                        value={user.userName}
                        onChange={handleChange} />
                    <CustomInput
                        label='E-Mail'
                        className='input'
                        errorText='Input E-mail'
                        name='mail'
                        value={user.mail}
                        onChange={handleChange} />
                </div>
                <div className="inputs-in-2 G-flex">
                    <CustomInput
                        label='First Name'
                        className='input'
                        errorText='Input Name'
                        name='firstName'
                        value={user.firstName}
                        onChange={handleChange} />
                    <CustomInput
                        label='Last Name'
                        className='input'
                        errorText='Input Last name'
                        name='lastName'
                        value={user.lastName}
                        onChange={handleChange} />
                </div>
                <CustomInput
                    label='Address'
                    className='input'
                    errorText='Input address'
                    name='address'
                    value={user.address}
                    onChange={handleChange} />
                <div className="inputs-in-3 G-flex">
                    <CustomInput
                        label='City'
                        className='input'
                        errorText='Input City'
                        name='city'
                        value={user.city}
                        onChange={handleChange} />
                    <CustomInput
                        label='Country'
                        className='input'
                        errorText='Input country'
                        name='country'
                        value={user.country}
                        onChange={handleChange} />
                    <CustomInput
                        label='Postal Code'
                        className='input'
                        errorText='Input postal code'
                        name='postCode'
                        value={user.postCode}
                        onChange={handleChange} />
                </div>
                <CustomInput
                    label='About me'
                    className='input'
                    name='about'
                    value={user.about}
                    onChange={handleChange} />
            </div>
            <button className="user-btn" onClick={handleSubmit}>Update Profile</button>
        </div>
        <div className="profile-display">
            <div className="profile-bg" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="user-img-bg">
                <div className="user-image" style={{ backgroundImage: `url(${userImg})` }}></div>
            </div>
            <div className="user-info">
                {user.firstName && user.lastName ? <p className="user-name">{user.firstName} {user.lastName}</p> : <p className="user-name">user name</p>}
                {user.userName ? <p >{user.userName}</p> : <p >nic name</p>}
                {user.about ? <p >{user.about}</p> : <p >about me</p>}

            </div>
            <div className="user-media">
                <span className="icon-facebook2"></span>
                <span className="icon-twitter"></span>
                <span className="icon-google-plus2"></span>
            </div>
        </div>
    </div>
}
export default UserProfile