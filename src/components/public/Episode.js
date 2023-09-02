import React from 'react'

const Episode = ({ episodios }) => {

    return (
        <div className="col-md-4  rounded">
            <div className="card-body ">
                <p className="card-text"><strong > Numero del Episodio : {episodios.id}</strong></p>
                <p className="card-text"><small > Nombre del Episodio : {episodios.name}</small></p>
                <p className="card-text"><small > Fecha del Episodio : {episodios.air_date}</small></p>
            </div>
        </div>

    )
}

export default Episode