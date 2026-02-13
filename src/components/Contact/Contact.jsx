import "./Contact.css"
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

function Contact(){

    const form=useRef();
    const msj=document.getElementById("msjbueno");
    const [sent, setSent] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
            "service_xboa76c",
            "template_57uesxk",
            form.current,
            "L2JOdcUw1ZL5wZWf3"
        )
        .then(()=>{
            setSent(true);
            form.current.reset();
            setTimeout(()=>{
                setSent(false)
            }, 3000);
        })
        .catch((error)=>{
            console.log(error);
        });
    };



    return(   
        <div className="card_contact">
            <section className="contact-container">
                <div><h2>Contáctame</h2></div>
                <form ref={form} onSubmit={handleSubmit}>
                    <input placeholder="Nombre" name="nombre"></input>
                    <input placeholder="Correo" name="correo"></input>
                    <textarea placeholder="Mensaje" className="inp" name="mensaje"></textarea>
                    <div className="down_card"><button className="download">Enviar</button></div>
                </form>
                {sent && <p className="success">Mensaje enviado</p>}
                <div className="email">
                    <p>jesusantos021@gmail.com</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;