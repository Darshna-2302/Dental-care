import Home from "./Home";
import React from "react";
import {Link,Routes,Route} from 'react-router-dom'
import Doctor1 from "../../Components/Doctor1";
import NavBar from "../../Components/NavBar";
import DoctorMap from "../../Components/DoctorMap";

export default function Doctor() {
    return (
        <>
        <NavBar/>
        <div className="bg-image">
        <div className="overlay"></div>
        <div className="container ">
                <div className="row bg-slider align-items-end">
                    <div className="col-md-7 col-sm-12 mb-5 bg-text">
                        <p><Link to="/" className="home-link">HOME</Link>
                        
                            <Link to="/services" className="services-link">SERVICES</Link> 
                            <Routes>
                                <Route path="/" component={<Home/>}></Route>
                            </Routes>
                        </p>
                        <h1>Well Experienced Doctors</h1>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>
        </div>
        <Doctor1/>
        <DoctorMap showAllCards={true}/>
        </>
    )
}
