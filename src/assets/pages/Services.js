import React from "react"
import {Link,Routes,Route} from 'react-router-dom'
import Home from "./Home"

import ServiceMap from "../../Components/ServiceMap"
import NavBar from "../../Components/NavBar"
import Service1 from "../../Components/Service1"
export default function Services() {
    return (
        <>
        <NavBar/>
        <div className="bg-image">
        <div className="overlay"></div>
        <div className="container ">
                <div className="row bg-slider align-items-end">
                    <div className="col-md-7 col-sm-12 mb-5 bg-text">
                        <p><Link to="/" className="home-link">HOME</Link>
                        
                            <Link className="services-link">SERVICES</Link> 
                            <Routes>
                                <Route path="/" component={<Home/>}></Route>
                            </Routes>
                        </p>
                        <h1>Our Services Keeps You Smile</h1>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>
               
        </div>
        <div className="services-section"></div>
        <Service1/>
        <ServiceMap showAllCards={true}/>
        </>
    )
}
