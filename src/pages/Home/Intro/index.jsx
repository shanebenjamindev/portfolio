import './intro.css'

export default function Intro() {
    return (
        <section id='section__Intro'>
            <div className="d-md-flex">
                <div className="intro__Item d-flex col-md-6 col-lg-6">
                    <div>
                        <div className="intro__Text">
                            <h1>Hello,</h1>
                            <span>Im Giang <br />
                                Website Designer / FrontEnd Developer
                            </span>
                            <div>
                                <button className="btn btn-outline-dark rouned-lg">hire me</button>
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
