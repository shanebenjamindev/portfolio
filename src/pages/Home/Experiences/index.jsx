import data from '../../../experienceData.json';
import ExperienceComponent from '../../../components/ExperienceComponent/ExperienceComponent';

export default function Experiences() {
    const renderExp = () => {
        return data?.map((work, index) => (
            <ExperienceComponent key={index} experience={work} />
        ));
    };

    return (
        <section id="section__Experience" className="w-75 m-auto py-5">
            <div>
                <div className="common__Title">
                    <h2>EXPERIENCE & PROJECTS</h2>
                </div>
                <div className="exp__Content mt-5" data-aos="fade-up" data-aos-duration="500">
                    {renderExp()}
                </div>
            </div>
        </section>
    );
}
