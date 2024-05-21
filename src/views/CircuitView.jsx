import React from 'react'
import './CircuitView.css'

function CircuitView({ circuit }) {
    return (
        <div className='CircuitView'>
            <h1>
                {circuit.name}
            </h1>
            <p>
                {circuit.description}
            </p>
        </div>
    )
}

export default CircuitView