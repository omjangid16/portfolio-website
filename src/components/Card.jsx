import React from 'react';

const Card = ({ title, description, image, link }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {link && <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
        </div>
    );
};

export default Card;
