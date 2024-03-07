import Home from "./Home";
import React from "react";
import {Link,Routes,Route} from 'react-router-dom'
import NavBar from "../../Components/NavBar";
import Contact1 from "../../Components/Contact1";

export default function Contact() {
    return (
        <>
        <NavBar/>
        <div className="bg-image">
        <div className="overlay"></div>
        <div className="container ">
                <div className="row bg-slider align-items-end">
                    <div className="col-md-7 col-sm-12 mb-5 bg-text">
                        <p><Link to="/" className="home-link">HOME</Link>
                        
                            <Link className="blog-link">BLOG</Link> 
                            <Routes>
                                <Route path="/" component={<Home/>}></Route>
                                
                            </Routes>
                        </p>
                        <h1>Contact Us</h1>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>
               
        </div>
        <Contact1/>
        </>
    )
}
