import React from 'react'
import { Link } from 'react-router-dom';



export default function Button({ personaje }) {
    return (
        <div className="btn-group ms-3 pb-3 gap-3">

            <button type="button" className="btn btn-sm btn-outline-secondary" >
                <Link to={'/'} className="nav-link px-2 ">Inicio</Link>
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary" >
                 <Link  to={`/details/${personaje}`} className="nav-link px-2 ">Volver a Descubre</Link> 
            </button>
        </div>
    )
}
