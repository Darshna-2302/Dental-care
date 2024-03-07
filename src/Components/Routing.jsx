import { Route,BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";
import Service from "../assets/pages/Services";
import Doctor from "../assets/pages/Doctor"
import Contact from "../assets/pages/Contact";
import Blog from '../assets/pages/Blog'
import Appointment from './Appointment'
import Services from "../assets/pages/Services";



export default function Routing()
{
    return (
        <div>
            <BrowserRouter>
           
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/doctor" element={<Doctor/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/appointment" element={<Appointment/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}