import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

const Detail = () => {
  
    const [personaje, setPersonaje] = useState({});
    const { id } = useParams();
    const { pathname } = useLocation();

    
    useEffect(() => {
        console.log(pathname);

        RickAndMortyService.getAllCharactersById(id)
            .then((data) => setPersonaje(data))//aca los setea .
            .catch((error) => console.log(error));

    }, [id])
    

    return (
        <div className="card mb-3 container">
            <div className="row g-0 mt-4 mb-4" >
                <div className="col-md-3">
                    <img src={personaje.image} className="img-fluid rounded " alt="img personaje" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title pb-3">{personaje.name}</h5>
                        <p className="card-text"><small> Specie : {personaje.species}</small></p>
                        <p className="card-text"><small> Status : {personaje.status}</small></p>
                        <p className="card-text"><small> Gender : {personaje.gender}</small></p>
                        <p className="card-text"><small> Created :{personaje.created}</small></p>
                        <p className="card-text"><small> Tipo :   {personaje.type}</small></p>
                        <div className="card-text"><small> Episodios : 
                        <ul>
                        {personaje.episode && personaje.episode.map((j, index) => (
                            <li key={index}>{j}</li>
                         ))}
                        </ul> 
                        </small> 
                        </div>
                        <p className="card-text"> <small> Origen : {personaje.origin && personaje.origin.name}</small></p>
                        <p className="card-text pb-3"> <small> Locación : {personaje.location && personaje.location.name}</small></p>
                    </div>
                    <div className="btn-group ms-3 pb-3 gap-3">
                        <button type="button" className="btn btn-sm btn-outline-secondary" >
                            <Link to={'/'} className="nav-link px-2 ">Inicio</Link>
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
// La evaluación de cortocircuito se basa en el comportamiento de los operadores 
// lógicos && (AND) y || (OR). Cuando se utiliza &&, si el primer operando es
//  evaluado como falso, la expresión se corta y no se evalúa el segundo operando. 
//  Si el primer operando es verdadero, la expresión devuelve el valor del segundo operando.