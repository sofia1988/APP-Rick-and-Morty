import React, { useState, useEffect } from 'react'
import { useUserForm } from '../../hooks/Custom.hooks'

const UserForm = () => {

  const { form, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true); // se va a encargar de ver si las contraseñas son iguales


  const [passwordConfirmation, setPasswordConfirmation] = useState();//se encarga de atrapar la unica clave que vamos a mandar

  const [pass, setPass] = useState(true)

  const handleSubmit = (e) => {
    // Userservice.save(form);
    // se va a encargar de atrapar el envio del formulario
    e.preventDefault();//para que no recargue la pagina
    console.log(form);
  };

  const handlePasswordConfirmation = (e) => {
    //la e hace refencia al input de donde se ejecuta la funcion
    setPasswordConfirmation(e.target.value); //aca vemos el valor de ese input
  };


  useEffect(() => {
    const { password } = form; //hago un destructuring de form, es decir, saco lo que me interesa de form, en este caso password, que es el name del input de contraseña
    setAreEquals(password === passwordConfirmation);
    validPass()
  }, [passwordConfirmation, pass]);


  const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;
    if (password !== undefined) {
      setPass(false)
    }
    return pass
  }

  return (
    <div className="container mt-5 py-5 ">
      <h4 className="mb-3 text-center">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3 justify-content-center">
          <div className="col-12 col-md-8">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12 col-md-8 ">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12 col-md-8">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              // no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
            {!areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <div className="col-12 col-md-8">
            <button
              disabled={!areEquals || pass} //si las claves no son iguales no funciona el boton
              className="w-100 btn btn-dark btn-lg"
              type="submit"
              onClick={handleSubmit}
            >
              Registrarme
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm
