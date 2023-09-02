import React, { Component } from 'react'//rce
import Cards from './Cards';



export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { personajes: [] };//constructor que inicializa en 0.

    }

    render() {
        console.log("hola desde el render");

        return (
            <main>

                <section className="py-4 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">
                                Rick and Morty</h1>
                            <p className="lead text-muted">Explora todos los detalles de tus personajes favoritos! Sumérgete en sus historias y aventuras, y descubre lo que los hace especiales.</p>
                        </div>
                    </div>
                </section>

                <Cards /> {/* personajes ={this.state.personajes} */}
                
            </main>
        )
    }
}


