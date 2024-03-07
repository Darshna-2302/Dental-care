import React from "react";
import ToothWhitening from '../images/Teeth-whitening.png'
import TeethCleaning from '../images/teeth-cleaning.png'
import QualityBraces from '../images/quality-braces.png'
import ModernAnesthetic from '../images/modern-anesthetic.png'
import DentalCalculus from '../images/teeth-cleaning.png'
import Paradontis from '../images/paradontis.png'
import DentalImplants from '../images/dental-implants.png'
import ToothBraces from '../images/tooth-braces.png'

import Card from './Card'
const ServiceMap=({showAllCards})=>{
const data=[{
    id:1,
    image:ToothWhitening,
    title:'Teeth Whitening',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:2,
    image:TeethCleaning,
    title:'Teeth Cleaning',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:3,
    image:QualityBraces,
    title:'Quality Braces',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:4,
    image:ModernAnesthetic,
    title:'Modern Anesthetic',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:5,
    image:DentalCalculus,
    title:'Dental Calculus',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:6,
    image:Paradontis,
    title:'Paradontis',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:7,
    image:DentalImplants,
    title:'Dental Implants',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
},
{
    id:8,
    image:ToothBraces,
    title:'Tooth Braces',
    content:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
}
]

const cardsToDisplay=showAllCards?data:data.splice(0,4);
return (
    <div className="container">
        <div className="row service-row">
        {cardsToDisplay.map((card)=>(
            <div className="col-md-3" key={card.id}>
            <Card 
                  image={card.image}
                  title={card.title}
                  content={card.content}

            />
            </div>
        ))}
        </div>

    </div>
)
}
export default ServiceMap