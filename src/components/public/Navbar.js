import React, { useEffect, useState } from 'react'
import Logo from './sanchez.svg';
import LogoEnojado from './enojado.svg';
import Dl from './ld.svg';

const Navbar = () => {
    const [logo, setLogo] = useState(Logo);

    useEffect(() => {
        function onMouseMove(event) {
            if (event.clientY < 100) {
                setLogo(LogoEnojado);
            } else {
                setLogo(Dl);
            }
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (

        <header className='container' >
            <nav className="navbar navbar-expand-lg  d-flex justify-content-end">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand " href="#">
                            <img src={logo} width="250" height="150" alt="logo" />
                        </a>
                    </div> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/.">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/episode">Episodios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/user-form">Formulario</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;



