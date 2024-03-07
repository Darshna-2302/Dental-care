import React from "react"
import {Link,Routes,Route} from 'react-router-dom'
import Home from "./Home"
import NavBar from "../../Components/NavBar"
import BlogMap from "../../Components/BlogMap"
import Blog1 from "../../Components/Blog1"
export default function Blog() {
    return (
        <>
          <NavBar/>
          <div className="bg-image">
          <div className="overlay"></div> 
          <div className="container ">
                <div className="row bg-slider align-items-end">
                    <div className="col-md-7 col-sm-12 mb-5 bg-text">
                        <p><Link to="/" className="home-link">HOME</Link>
                        
                            <Link to="/blog" className="about-link">BLOG</Link> 
                            <Routes>
                                <Route path="/" component={<Home/>}></Route>
                                <Route path="/blog" component={<Blog/>}></Route>
                            </Routes>
                        </p>
                        <h1>Read Our Blog</h1>
                    </div>
                    <div> 
                    </div>
                </div>
            </div> 
        </div>
        <Blog1/>
        <BlogMap showAllCards={true}/>
        </>
    )
}
