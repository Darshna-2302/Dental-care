import React from "react";
export default function Card(props){
    const {image,title,content}=props;
    return (
        <>
       
              <div className="dental-intro-service1-card d-block text-center">
              <div className="service-image d-flex justify-content-center align-items-center">

                <img src={image} alt="tooth-whitening" height={'50px'} width={'50px'}></img>

              </div>
              <div className="p-2 mt-3">             
                <h3 className="service-body-heading">{title}</h3> 
                <p className="service-body-content">{content}</p>
              </div>
              </div>
              
        </>
    )
}