import React from 'react'
import './ViajeAMedida.css'

function ViajeAMedida() {
    return (
        <section className='ViajeAMedida-container'>
            <img className='ViajeAMedida-img' src="/public/viaje-a-tu-medida.webp" alt="Machu Picchu Maravilla del mundo" />
            <div className='ViajeAMedida-textos'>
                <h3 className='ViajeAMedida-title'>
                    Viaja a tu medida
                </h3>
                <p className='ViajeAMedida-description'>
                    Personaliza tu viaje y descubre destinos turísticos con el sello global de SAFE TRAVELS
                </p>
                <a className='ViajeAMedida-button' href="">Más Información</a>
            </div>
        </section>


    )
}

export default ViajeAMedida