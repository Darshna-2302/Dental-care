import Doctor1 from '../images/person_5.jpg'
import Doctor2 from '../images/person_6.jpg'
import Doctor3 from '../images/person_7.jpg'
import Doctor4 from '../images/person_8.jpg'
import Doctor5 from '../images/person_1.jpg'
import Doctor6 from '../images/person_2.jpg'
import Doctor7 from '../images/person_3.jpg'
import Doctor8 from '../images/person_4.jpg'
import DoctorCard from './DoctorCard'

const DoctorMap=({showAllCards})=>{
    const doctors=[
        {
            id:1,
            image:Doctor1,
            name:'Tom Smith',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:2,
            image:Doctor2,
            name:'Mark Wilson',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:3,
            image:Doctor3,
            name:'Patrick Jacobson',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:4,
            image:Doctor4,
            name:'Ivan Dorchsner',
            role:'System Analyst',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:5,
            image:Doctor5,
            name:'Tom Smith',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:6,
            image:Doctor6,
            name:'Mark Wilson',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:7,
            image:Doctor7,
            name:'Patrick Jacobson',
            role:'Dentist',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        },
        {
            id:8,
            image:Doctor8,
            name:'Ivan Dorchsner',
            role:'System Analyst',
            content:'Far far away, behind the word mountains, far from the countries Vokalia'
        }
    ]
    const cardsToDisplay=showAllCards?doctors:doctors.splice(0,4);
   return (
    <div className='container'>
        <div className='row doctor-row'>
            {cardsToDisplay.map((doctor)=>(
                <div className='col-lg-3 col-md-6 d-flex mb-sm-4' key={doctor.id}>
                    <DoctorCard
                    image={doctor.image}
                    name={doctor.name}
                    role={doctor.role}
                    content={doctor.content}
                    />
                </div>
            ))}
        </div>

    </div>
   )
}
export default DoctorMap