import "./Experience.css"

function Experience(){
    return(
        <div className="experience_card">
            <section className="experience-container">
                <h2>Experiencia</h2>
                <div className="exp-con2"> 
                    <div>
                        <div className="linea-exp1">
                            <div className="circulo"></div>
                            <div className="circulo2"></div>
                        </div>

                    </div>
                    <div className="exp-con1">
                        <div className="text-exp1">
                            <div className="detalles-exp">
                                <h4>Sistema Campus Virtual — Full Stack Developer</h4>
                                <div className="empresa"><p>Proyecto personal</p></div>
                            </div>
                            <p>Construí una plataforma web con React, FastAPI y MySQL, integrando autenticación por roles, gestión de asistencias y subida de archivos, con una arquitectura funcional de frontend y backend.</p>
                        </div>
                        <div className="text-exp2"><p>------------------------------------------------</p></div>
                        <div className="text-exp1">
                            <div className="detalles-exp">
                                <h4>Sistema de Gestión para Taller Mecánico — Desarrollador Web</h4>
                                <div className="empresa"><p>Proyecto personal</p></div>
                            </div>
                            <p>Diseñé un sistema para administrar clientes, vehículos y órdenes de trabajo, modelando la base de datos y transformando procesos reales en una solución digital organizada.</p>
                        </div>
                    </div>
                </div>  
            </section>
        </div> 
    );
}

export default Experience;
