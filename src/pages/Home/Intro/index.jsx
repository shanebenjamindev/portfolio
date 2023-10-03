import './intro.css'

export default function Intro() {
    return (
        <section id='section__Intro'>
            <div className="d-md-flex">
                <div className="intro__Item d-flex">
                    <div>
                        <div className="intro__Text">
                            <h1>Hello,</h1>
                            <h3>Im Giang <br />
                                Website Designer / FrontEnd Developer
                            </h3>
                            <div className="my-5">
                                <button className="btn btn-outline-dark rouned-lg">Hire me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <span>I build website, app with reactjs</span>
            </div>
        </section>
    )
}
