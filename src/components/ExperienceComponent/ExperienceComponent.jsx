import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default function ExperienceComponent({ experience }) {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleChangeTab = (index) => {
        setSelectedProjectIndex(index);
    };

    return (
        <div className='experience-component' style={{ display: 'flex', gap: '30px', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ flex: 1 }}>
                <div>
                    <h4>{experience.NameCompany}</h4>
                    <span><strong>Position:</strong> {experience.Position}</span>
                </div>
                <div className='my-2 position-relative'>
                    {experience.Projects[selectedProjectIndex].ImageUrl && (
                        <img height={"300px"} width={"100%"} src={experience.Projects[selectedProjectIndex].ImageUrl} alt={experience.Projects[selectedProjectIndex].Name} />
                    )}
                    <div className='d-md-flex' style={{ gap: '10px', right: '10%', bottom: '-10px', position: 'absolute' }}>
                        {experience.Projects[selectedProjectIndex].Github && (
                            <Link to={experience.Projects[selectedProjectIndex].Github}>
                                <button className='btn btn-dark'>GitHub</button>
                            </Link>
                        )}
                        {experience.Projects[selectedProjectIndex].Deloy && (
                            <Link to={experience.Projects[selectedProjectIndex].Deloy}>
                                <button className='btn btn-dark'>Deployment</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <h3>Projects:</h3>
                <div>
                    {experience.Projects.map((project, projectIndex) => (
                        <button
                            key={projectIndex}
                            onClick={() => handleChangeTab(projectIndex)}
                            style={{
                                marginRight: '10px',
                                backgroundColor: selectedProjectIndex === projectIndex ? 'black' : 'transparent',
                                color: selectedProjectIndex === projectIndex ? 'white' : 'black',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '5px 10px',
                                borderRadius: '5px'
                            }}
                        >
                            {project.Name}
                        </button>
                    ))}
                </div>
                <div className='d-flex py-5 my-3 align-items-center'>
                    <div>
                        <p><strong>Description:</strong> {experience.Projects[selectedProjectIndex].Description}</p>
                        <p><strong>Technologies:</strong> {experience.Projects[selectedProjectIndex].Tech}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
