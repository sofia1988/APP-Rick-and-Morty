import React, { useEffect, useRef, useState } from 'react'

import LogoEnojado from './enojado.svg';
import Ld from './ld.svg';

const Navbar = () => {

    const [_, setIsMouseOverLogo] = useState(false);
    const logoRef = useRef(null);

    useEffect(() => {
        const logoElement = logoRef.current
        console.log(logoElement);
        const onMouseEnter = () => {
            setIsMouseOverLogo(true)
            logoElement.src = LogoEnojado;
        }


        const onMouseLeave = () => {
            setIsMouseOverLogo(false)
            logoElement.src = Ld;
        }

        logoElement.addEventListener('mouseenter', onMouseEnter);
        logoElement.addEventListener('mouseleave', onMouseLeave);

        return () => {
            logoElement.addEventListener('mouseenter', onMouseEnter);
            logoElement.addEventListener('mouseleave', onMouseLeave);
        }
    }, []);

    return (
        <div className='bg'>
            <div className='container'>
                <div className='row py-2'>
                    <div className='container col'>
                        <div className='col-2 pt-3'>
                            <a className="navbar-brand" href="">
                                <img src={Ld} ref={logoRef} width="250" height="150" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <header className='col pt-5 d-flex justify-content-end' >
                        <nav className=" navbar navbar-expand-lg  ">
                            <div className="container-fluid">
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

                </div>
            </div>
        </div>
    )
}

export default Navbar;



