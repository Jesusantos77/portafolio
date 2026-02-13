import "./Hero.css"

function Hero(){
    return(
        <div className="hero_card">
            <section className="hero-container">
                <img className="perfil" src="https://media.licdn.com/dms/image/v2/D4E35AQGhlnfaRE2xmQ/profile-framedphoto-shrink_200_200/B4EZukDOV1MAAc-/0/1767983867569?e=1771344000&v=beta&t=N9r95p25SqpeZEkGNwJWM3RTf9_d75LkLHKWO6P3DJQ" alt="Perfil" />
                <section className="presentation">   
                    <h2 className="name">Jesús Santos Mercado</h2>
                    <p>Full Stack Developer</p>
                    <div>
                        <img src="https://images.icon-icons.com/653/PNG/512/locate_gps_navigation_pin_point_location_icon-icons.com_59906.png" className="ubicacion"></img>
                        <h3 className="colombia">Colombia</h3>
                    </div>
                </section> 
                <section className="text-din">
                    <h3>Desarrollador Full Stack</h3>
                    <h3>PLATAFORMAS ESCALABLES</h3>
                </section>

                <div className="down_card">
                    <a href="./Jesus_Santos_CV.pdf" download><button className="download">Descargar CV</button></a>
                </div>
                <div className="redes">
                    <button className="red"><a href="https://www.linkedin.com/in/jes%C3%BAs-santos-mercado-90485b342/"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="ubicacion1"></img></a></button>
                    <button className="red"><a href="https://github.com/Jesusantos77"><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" className="ubicacion1" /></a></button>
                    <button className="red"><a href="mailto:jesusantos021@gmail.comm"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className="ubicacion1" /></a></button>
                    <button className="red"><a href="https://wa.me/qr/CVQKAM6A3H5HN1"><img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" className="ubicacion1"    /></a></button>
                </div>
            </section>
        </div>
    );
}

export default Hero;