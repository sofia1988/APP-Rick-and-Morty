import React, { useState } from 'react'//rfc
import Logo from './sanchez.svg';

const Footer = () => {
  const [clicks, setClicks] = useState(0);//[la primera es la variable el segundo es la funcion] =Hook (VALOR INICIAL)

  const year = new Date().getFullYear();
  const company = "creaciones brunila";

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (

    <footer className=" container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">&copy; {year} {company}<strong className='text-white'> / Tocaste a Rick Sanchez : Clicks={clicks}</strong></p>
      
      <span onClick={handleClick}>
        <img src={Logo} className="App-logo " width="100" height="100" alt="logo " />
      </span>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="episode" className="nav-link px-2 text-muted">Episodios</a></li>
        <li className="nav-item"><a href="/user-form" className="nav-link px-2 text-muted">Formulario</a></li>
      </ul>
    </footer>

  )
}

export default Footer
