import "./About-me.css"

function About_me(){
    return(
        <div className="card">
            <section className="about-me-container"> 
                <h2>Sobre mí</h2>
                <div className="exp-con"> 
                    <div className="linea"></div>
                    <div className="text">
                        <p>Desarrollador full stack en formación con sólida base lógica y matemática, experiencia en Python y JavaScript, y manejo de tecnologías como React, FastAPI, MySQL, CSS y Tailwind. Construyo aplicaciones funcionales enfocadas en soluciones reales, aprendo con rapidez y me adapto con facilidad a nuevos desafíos, aportando compromiso y mejora continua en cada proyecto.</p>
                        <div className="frase">
                            <p>"Hazlo tan bien que no puedan ignorarte."</p>
                            <p>-Steve Martin</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About_me;