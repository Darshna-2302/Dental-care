import About1 from "../../Components/About1";
import About2 from "../../Components/About2";
import NavBar from "../../Components/NavBar";
import Home from "./Home";
import {Link,Route,Routes} from 'react-router-dom'
export default function About() {
    return (
        <>
        <NavBar/>
        <div className="bg-image">
        <div className="overlay"></div>

            <div className="container ">
                <div className="row bg-slider align-items-end">
                    <div className="col-md-7 col-sm-12 mb-5 bg-text">
                        <p><Link to="/" className="home-link">HOME</Link>
                        
                            <Link className="about-link">ABOUT</Link> 
                            <Routes>
                                <Route path="/" component={<Home/>}></Route>
                            </Routes>
                        </p>
                        <h1>About  Us</h1>
                    </div>
                    <div> 
                    </div>
                </div>
            </div>
        </div>

        <About1/>
        <About2/>
        </>
    )
}
