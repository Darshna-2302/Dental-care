import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function About2()
{
    return (
        <>

            <div className="container-full mt-5">
                <div className="row d-flex g-0">
                    <div className="col-md-6 about2-intro-bg ">
                    </div>
                    <div className="col-md-6 d-flex">
                    <div className="about2-outer">
      				<div className="about2-heading mb-5">
		            <h2 className="about2-heading-title mb-2">Dentacare with a personal touch</h2>
		            <p className="about2-heading-content">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
		          </div>
      				<div className="about2-list d-flex">
      					<div className="about2-list-icon d-flex justify-content-center align-items-center">
      						<span className="check-icon"><FaCheck/></span>
      					</div>
      					<div className="about2-list-text">
	      					<h3 className="about2-list-heading">Well Experience Dentist</h3>
	      					<p className="about2-list-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      					</div>
      				</div>
      				<div className="about2-list d-flex">
      					<div className="about2-list-icon d-flex justify-content-center align-items-center">
      						<span className="check-icon"><FaCheck /></span>
      					</div>
      					<div className="about2-list-text">
	      					<h3 className="about2-list-heading">High Technology Facilities</h3>
	      					<p className="about2-list-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      					</div>
      				</div>
      				<div className="about2-list d-flex">
      					<div className="about2-list-icon d-flex justify-content-center align-items-center">
      						<span className="check-icon"><FaCheck /></span>
      					</div>
      					<div className="about2-list-text">
	      					<h3 className="about2-list-heading">Comfortable Clinics</h3>
	      					<p className="about2-list-para">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      					</div>
      				</div>
      			    </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}