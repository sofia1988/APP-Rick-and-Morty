import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ personaje }) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className=" card-img-top img-fluid" src={personaje.image} alt="img" />
                <div className="card-body">
                    <h3 className="mb-2 text-dark">{personaje.name}</h3>
                    <p className="card-text">¡Toca el botón para conocer sus detalles y aventuras!</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <Link to={`/details/${personaje.id}`} className="nav-link px-2 text-secondary">Descubre</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
//alt96 ``