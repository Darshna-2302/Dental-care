import SmallTeeth from '../images/smallteeth.jpg'
import MissingFront from '../images/MissingFront.jpg'
import Periodontal from '../images/paradontal.jpg'
import TeethStraightening from '../images/TeethStraightening.jpg'
import TeethFilling from '../images/ToothFilling.jpg'
import TeethSensitivity from '../images/TeethSensitive.jpg'
import Toothache from '../images/Toothache.jpg'
import DentalCrown from '../images/DentalCrown.jpg'
import BlogCard from './BlogCard'
const BlogMap=({showAllCards})=>{
    const doctors=[
        {
            id:1,
            image:SmallTeeth,
            name:'WHAT CAUSES SHORT TEETH?',
            role:'Short teeth can impact your confidence and also cause problems with eating and speaking. This issue can be caused by',
            content:'genetics or can develop due to wear and tear.'
        },
        {
            id:2,
            image:MissingFront,
            name:'SOLUTIONS FOR MISSING TOOTH',
            role:'Issues with your smile can cause you to be self-conscious. The list of issues may include stained, crooked, or worn',
            content:' teeth.'
        },
        {
            id:3,
            image:Periodontal,
            name:'PERIODONTAL DISEASE',
            role:'Your gums and supporting bone hold your teeth in place. Issues with either can have serious consequences. When you',
            content:'begin to lose this attachment, we call it periodontal disease, also called gum disease.'
        },
        {
            id:4,
            image:TeethStraightening,
            name:'TEETH STRAIGHTENING',
            role:'Crooked teeth can diminish your confidence and have a negative impact on your oral health. Luckily, there are many',
            content:'teeth straightening options.'
        },
        {
            id:5,
            image:TeethFilling,
            name:'TOOTH FILLING BASICS',
            role:'Tooth decay is among the most common health issues in the world. According to the National Institute of Dental and',
            content:'64 have had some form of decay in their permanent teeth'
        },
        {
            id:6,
            image:TeethSensitivity,
            name:'TOOTH SENSITIVITY',
            role:'If you are experiencing sharp tooth pain when eating certain types or temperatures of food, you should',
            content:'not brush it off.'
        },
        {
            id:7,
            image:Toothache,
            name:'TOOTHACHE AND ITS CAUSES',
            role:'Even a mild toothache can be a distraction. In the worst cases, your tooth pain may be so severe that you can’t',
            content:'function normally'
        },
        {
            id:8,
            image:DentalCrown,
            name:'WHAT ARE DENTAL CROWN?',
            role:'You deserve a smile that you are proud to show off and restorative dentistry can help. Restorative dental treatments',
            content:'aim to treat oral health conditions or fix problems with your teeth.'
        }
    ]
    const cardsToDisplay=showAllCards?doctors:doctors.splice(0,4);
   return (
    <div className='container'>
        <div className='row doctor-row'>
            {cardsToDisplay.map((doctor)=>(
                <div className='col-lg-3 col-md-6 d-flex mb-sm-4' key={doctor.id}>
                    <BlogCard
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
export default BlogMap