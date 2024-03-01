import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectComponent(props) {
    const { project } = props;
    return (
        <Link to={`${project.Deloy}`} className = "col-md-6 projects__Item" > 
    < div className = "custom-card-inner" >
                <div className="overlay"></div>
                <img className="custom-card-img" width="100%" height="300" src={project.ImageUrl} alt={project.Name} />
                <div className="custom-card-details">
                    <h4>{project.Name}</h4>
                    <p>{project.Tech}</p>
                    <div className="text-right">
                        <a href={project.Github} className="btn btn-dark custom-card__ViewBtn">View code</a> {/* Use <a> for external links */}
                    </div>
                </div>
            </div >
        </Link >
    );
}
