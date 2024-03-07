import React, { useState } from 'react';

const BlogCard = ({ image, name, role, content }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
      setShowFullContent(!showFullContent);
    };

    return (
        <div className="card doctor-card">
            <div className='doctor-card-image'>
                <img src={image} alt={name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{showFullContent ? role + " " + content : role+"..."}</p>
                <button onClick={toggleContent} className="btn btn-primary blog-btn">
                  {showFullContent ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
