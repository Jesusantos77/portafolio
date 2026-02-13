import "./Skill.css"

function Skill(){
    return(
        <div className="skill_card">
            <section className="skill-container">
                <h2>Habilidades técnicas</h2>
                <div className="skill">
                    <h4 className="title">LENGUAJES</h4>
                    <div className="cuatro"> 
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"></img>
                                <h4>Python</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></img>
                                <h4>JavaScripts</h4>
                            </button>
                        </div>
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000"></img>
                                <h4>SQL</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"></img>
                                <h4>TypeScript</h4>
                            </button>
                        </div>
                    </div>  
                </div>
                <div className="skill">
                    <h4 className="title">BACKEND</h4>
                    <div className="btns">
                        <button className="btn">
                            <img className="iconos" src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"></img>
                            <h4>MySQL</h4>
                        </button>
                        <button className="btn">
                            <img className="iconos" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0"></img>
                            <h4>FastAPI</h4>
                        </button>
                    </div>
                </div>
                <div className="skill">
                    <h4 className="title">FRONTEND</h4>
                    <div className="cuatro">
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"></img>
                                <h4>HTML5</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"></img>
                                <h4>React</h4>
                            </button>
                        </div>
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"></img>
                                <h4>CSS3</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"></img>
                                <h4>Tailwind</h4>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <h4 className="title">HERRAMIENTAS</h4>
                    <div className="cuatro">
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"></img>
                                <h4>Git</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"></img>
                                <h4>GitHub</h4>
                            </button>
                        </div>
                        <div className="btns">
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000"></img>
                                <h4>Figma</h4>
                            </button>
                            <button className="btn">
                                <img className="iconos" src="https://img.icons8.com/?size=100&id=YO3YqSaTOu5K&format=png&color=000000"></img>
                                <h4>Vite</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skill;