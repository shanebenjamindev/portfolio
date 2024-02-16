import ProjectComponent from '../../../components/ProjectComponent/ProjectComponent';
import './projects.css';
import projectData from '../../../projectData.json';

export default function Projects() {
    const renderProject = () => {
        return projectData?.map((project, index) => {
            return <ProjectComponent project={project} key={index} />;
        });
    };

    return (
        <section id="section__Projects" className="py-5 px-3 container">
            <div className="text-center">
                <h1>Projects</h1>
            </div>
            <div className="projects__Content d-md-flex justify-content-center flex-wrap" data-aos="fade-right" data-aos-duration="500">
                {renderProject()}
            </div>
        </section>
    );
}
