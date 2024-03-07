import About2 from "../../Components/About2";
import DentalIntro from "../../Components/Dental-intro";
import Doctor1 from "../../Components/Doctor1";
import DoctorMap from "../../Components/DoctorMap";
import MainCarousel from "../../Components/Main-carousel";
import NavBar from "../../Components/NavBar";
import Service1 from "../../Components/Service1";
import ServiceMap from "../../Components/ServiceMap";

export default function Home() {
    return (
        <div>
            <NavBar/>

            <MainCarousel/>

            <DentalIntro/>

            <Service1/>

            <ServiceMap/>

            <About2/>

            <Doctor1/>

            <DoctorMap/>


        </div>
    )
}
