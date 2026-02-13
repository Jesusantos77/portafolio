import "./projects.css"

function projects(){
    return(
        <div className="proyectos_card">
            <section className="projects-container">
                <div className="encabezado">
                    <h2 className="pro">Proyectos personales</h2>
                    <a href="https://github.com/Jesusantos77"><button className="boton" onClick={()=>navigate("/https://github.com/Jesusantos77")}>
                        <p>Ver todo</p>
                        <span className="arrow">→</span>
                    </button></a>
                </div>
            <div className="proyectos uno">
                <div className="encabezado-proyecto">
                    <div className="nameproject"><p>My portfolio</p></div>
                    <img className="fotito" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" onClick={() => window.location.reload()}></img>
                </div>
                <div className="btns">
                    <button className="btn-one js">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></img>
                        <h4>JavaScript</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"></img>
                        <h4>Tailwind</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"></img>
                        <h4>React</h4>
                    </button>
                </div>
            </div>
            <div className="proyectos dos">
                <div className="encabezado-proyecto">
                    <div className="nameproject"><p>Book Manager</p></div>
                    <a href="https://github.com/Jesusantos77/book-manager.git"><img className="fotito" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"></img></a>
                </div>
                <div className="btns">
                    <button className="btn-one js">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></img>
                        <h4>JavaScript</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0"></img>
                        <h4>FastAPI</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"></img>
                        <h4>MySQL</h4>
                    </button>
                </div>
            </div>
            <div className="proyectos tres">
                <div className="encabezado-proyecto">
                    <div className="nameproject"><p>Task Manager</p></div>
                    <a href="https://github.com/Jesusantos77/administrador-tareas-fastapi.git"><img className="fotito" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"></img></a>
                </div>
                <div className="btns">
                    <button className="btn-one js">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></img>
                        <h4>JavaScript</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/fastapi-icon-72blnc5ihz9c30ltfruvm.png/fastapi-icon-sv7hsd0o3donlq26es2lr.png?_a=DATAiZAAZAA0"></img>
                        <h4>FastAPI</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"></img>
                        <h4>MySQL</h4>
                    </button>
                </div>
            </div>
            <div className="proyectos cuatros">
                <div className="encabezado-proyecto">
                    <div className="nameproject"><p>Dashboard</p></div>
                    <a href="https://github.com/Jesusantos77/API.git"><img className="fotito" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"></img></a>
                </div>
                <div className="btns">
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"></img>
                        <h4>HTML5</h4>
                    </button>
                    <button className="btn-one">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"></img>
                        <h4>CSS3</h4>
                    </button>
                    <button className="btn-one js">
                        <img className="iconos-one" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"></img>
                        <h4>JavaScript</h4>
                    </button>
                </div>
            </div>
            </section>
        </div>
    )
}

export default projects;