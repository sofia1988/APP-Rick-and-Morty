import { useState } from "react"

export const useUserForm = (initialState = {}) => {

    const [form, setForm] = useState(initialState);
    //escucha cambios handleChanges
    const handleChanges = ({ target }) => {
        const { name, value } = target;
        // console.log("target: ", target);  //1- cuando llame a handleChange cada input va a mostrar quien lo llamo
        // console.log("name: ", name); // 2- el name que tiene
        // console.log("value: ", value); // 3- y el value que tiene 

        setForm({
            ...form, //esto hace que si el form ya tenia valor tmb los incluya y agregue los nuevos
            [name]: value,
        });
    }
    return {
        form,
        setForm,
        handleChanges,
    };
}
