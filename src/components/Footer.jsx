import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <section className='Footer-links'>
                <article className='Footer-company'>
                    <h4 className='Footer-title'>
                        Nuestra Empresa
                    </h4>
                    <ul className='Footer-company-list'>
                        <li className='Footer-company-list-item'><a href="">Inicio</a></li>
                        <li className='Footer-company-list-item'><a href="">Nosotros</a></li>
                        <li className='Footer-company-list-item'><a href="">Circuitos</a></li>
                        <li className='Footer-company-list-item'><a href="">Testimonios</a></li>
                        <li className='Footer-company-list-item'><a href="">Noticias</a></li>
                        <li className='Footer-company-list-item'><a href="">Contacto</a></li>
                    </ul>
                </article>

                <article className='Footer-tours'>
                    <h4 className='Footer-title'>
                        Nuestros Tours
                    </h4>
                    <ul className='Footer-tours-list'>
                        <li className='Footer-tours-list-item'><a href="">A lo largo de los Andes</a></li>
                        <li className='Footer-tours-list-item'><a href="">Aventura Inca</a></li>
                        <li className='Footer-tours-list-item'><a href="">Del Pacífico al Amazonas</a></li>
                        <li className='Footer-tours-list-item'><a href="">Corazón del Imperio Inca</a></li>
                        <li className='Footer-tours-list-item'><a href="">Esencia del Perú</a></li>
                        <li className='Footer-tours-list-item'><a href="">Panorama Peruano</a></li>
                        <li className='Footer-tours-list-item'><a href="">Perú - Bolivia</a></li>
                        <li className='Footer-tours-list-item'><a href="">Tesoros del Norte</a></li>
                    </ul>
                </article>

                <article className='Footer-experience'>
                    <h4 className='Footer-title'>
                        Otras Experiencias
                    </h4>
                    <ul className='Footer-experience-list'>
                        <li className='Footer-experience-list-item'><a href="">Inicio</a></li>
                        <li className='Footer-experience-list-item'><a href="">Nosotros</a></li>
                        <li className='Footer-experience-list-item'><a href="">Circuitos</a></li>
                        <li className='Footer-experience-list-item'><a href="">Testimonios</a></li>
                        <li className='Footer-experience-list-item'><a href="">Noticias</a></li>
                        <li className='Footer-experience-list-item'><a href="">Contacto</a></li>
                    </ul>
                </article>

                <article className='Footer-contact'>
                    <h4 className='Footer-title'>
                        Contacto
                    </h4>
                    <ul className='Footer-contact-list'>
                        <li className='Footer-contact-list-item'><a href="">Central: +51 981 310 819</a></li>
                        <li className='Footer-contact-list-item'><a href="">Whatsapp: +51 981 310 819</a></li>
                        <li className='Footer-contact-list-item'><a href="">info@pachamamaturismo.org</a></li>
                        <li className='Footer-contact-list-item'><a href=""><p>Jr. Inca Garcilazo De La Vega 496,</p> <br /><p> San Martín de Porres</p></a></li>
                        <li className='Footer-contact-list-item'><a href="">
                            <img className='Footer-libro' src="libro-reclamaciones.webp" alt="Libro de reclamaciones" />
                            <p>Libro de reclamaciones</p>
                        </a></li>
                    </ul>
                </article>
            </section>
            <section className='Footer-info'>
                <article>
                    <p className='Footer-copyright'>
                        Copyright © 2024 Todos los derechos reservados / Pachamama Turismo
                    </p>
                </article>
                <article className='Footer-network'>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </article>
            </section>
        </footer>
    )
}

export default Footer