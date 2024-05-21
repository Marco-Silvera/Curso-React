import './Card.css'
import { Link } from 'react-router-dom';


function Card({ title = 'Titulo por defecto', description = 'Descripción por defecto', path = '' }) {
    return (
        <div className="Card">
            <Link to={path}>
                <h2>
                    {title}
                </h2>
            </Link>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Card;