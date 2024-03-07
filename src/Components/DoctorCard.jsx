import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
import { Link } from 'react-router-dom';

const DoctorCard = ({ image, name, role, content }) => {
    return (
        <div className="card doctor-card">
            <div className='doctor-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className="card-body">

                <Link to="/doctor" className='doctor-name'><h5 className="card-title">{name}</h5></Link>
                <p className="card-role">{role}</p>
                <p className="card-text">{content}</p>
                <span className='social-media'>
                    <Link to="/twitter"><TiSocialTwitter className='twit'/></Link>
                    <Link to="/facebook"><TiSocialFacebook className='fb'/></Link>
                    <Link to="/instagram"><IoLogoInstagram className='insta'/></Link>
                    <Link to="/googleplus"><IoLogoGoogleplus className='google'/></Link>
                </span>
            </div>
        </div>
    );
};

export default DoctorCard;
