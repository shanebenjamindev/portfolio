import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function ExperienceComponent({ experience }) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleChangeTab = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <div
      className="experience-component my-5 p-3 d-md-flex"
      style={{
        gap: "30px",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>
        <div>
          <h2>{experience.NameCompany}</h2>
          <p>
            <strong>Position:</strong> {experience.Position}
          </p>

          {experience.Description ? (
            <p>
              <strong>Responsibilities:</strong> {experience.Description}
            </p>
          ) : null}
        </div>
        <div className="my-2 position-relative">
          {experience.Projects[selectedProjectIndex].ImageUrl && (
            <img
              width={"100%"}
              height={"100%"}
              src={experience.Projects[selectedProjectIndex].ImageUrl}
              alt={experience.Projects[selectedProjectIndex].Name}
            />
          )}

          {experience.Projects[selectedProjectIndex].videoUrl && (
            <iframe
              src={experience.Projects[selectedProjectIndex].videoUrl}
              height={"400px"}
              width={"100%"}
              allow="autoplay"
            ></iframe>
          )}

          {experience.Projects[selectedProjectIndex].Deloy && (
            <Link to={experience.Projects[selectedProjectIndex].Deloy}>
              <div className="custom-overlay">
                <span>Go to site</span>
              </div>
            </Link>
          )}
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
                marginRight: "10px",
                backgroundColor:
                  selectedProjectIndex === projectIndex
                    ? "black"
                    : "transparent",
                color:
                  selectedProjectIndex === projectIndex ? "white" : "black",
                border: "none",
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {project.Name}
            </button>
          ))}
        </div>
        <hr />

        <div className="py-5 my-3 align-items-center">
          {experience.Projects[selectedProjectIndex].Description && (
            <p>
              <strong>Description:</strong>{" "}
              {experience.Projects[selectedProjectIndex].Description}
            </p>
          )}
          <p>
            <strong>Technologies:</strong>{" "}
            {experience.Projects[selectedProjectIndex].Tech}
          </p>

          {experience.Projects[selectedProjectIndex].Github && (
            <p>
              <strong>Github: </strong>
              <Link to={experience.Projects[selectedProjectIndex].Github}>
                <button className="btn__Primary-outline">GitHub</button>
              </Link>
            </p>
          )}

          {experience.Projects[selectedProjectIndex].Deloy && (
            <p>
              <strong>URL: </strong>
              <Link to={experience.Projects[selectedProjectIndex].Deloy}>
                <button className="btn__Primary-outline">Go to site</button>
              </Link>
            </p>
          )}

          {experience.Projects[selectedProjectIndex].videoUrl && (
            <p>
              <strong>Video: </strong>
              <Link to={experience.Projects[selectedProjectIndex].videoUrl}>
                <button className="btn__Primary-outline"> Demo</button>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
