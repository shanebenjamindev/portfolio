import './skills.css'

export default function Skills() {
    return (
        <section id="skills" className>
            <div>
                <div className="common__Title"><h2>SKILLS</h2></div>
                <div className="skills__Content p-lg-5">
                    <h4>PROGRAMMING LANGUAGES &amp; TOOLS:</h4>
                    <div className="skills__Icon p-4">

                        Tech:
                        HTML CSS SASS JavaScript jQuery RestfulApi PHP Responsive MVC Git

                        Framework:
                        Bootstrap, Reactjs (redux-toolkit, react-router-dom)
                        Version Control: Sourcetree, Github
                    </div>
                    <h4 className="mt-4">WORKFLOW</h4>
                    <div className="p-3">
                        <p>
                            Gather requirements: Understand the project requirements, goals,
                            target audience, and design specifications.
                        </p>
                        <p>
                            Plan and organize: Plan the structure, layout, and user
                            interface of the website or application. Create wireframes and
                            mockups to visualize the design.
                        </p>
                        <p>
                            Optimize performance: Optimize the website or application for
                            performance by minimizing file sizes, reducing HTTP requests,
                            and improving load times.
                        </p>
                        <p>Mobile-First, Responsive Design</p>
                        <p>Cross Browser Testing &amp; Debugging</p>
                    </div>
                    <h4>CERTIFICATES: TOEIC 740</h4>
                </div>
            </div>
        </section>

    )
}
