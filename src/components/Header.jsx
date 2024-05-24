import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <a href="">
                <img className='Header-logo' src="logo.webp" alt="Logo Pachamama Turismo" />
            </a>
            <div className='Header-container'>
                <ul className='Header-list'>
                    <li className='Header-list-item'><a href="">Inicio</a></li>
                    <li className='Header-list-item'><a href="">Nosotros</a></li>
                    <li className='Header-list-item'><a href="">Circuitos</a></li>
                    <li className='Header-list-item'><a href="">Testimonios</a></li>
                    <li className='Header-list-item'><a href="">Noticias</a></li>
                    <li className='Header-list-item'><a href="">Contacto</a></li>
                </ul>
                <div className='Header-container-languages'>
                    <a href="">
                        <img className='Header-img-spain' src="españa.webp" alt="Bandera Española" />
                    </a>
                    <a href="">
                        <img className='Header-img-france' src="francia.webp" alt="Bandera Francesa" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header