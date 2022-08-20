import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



const Formulario = ({crearCita}) => {

    //Crear citas
    const [cita, setCita] = useState(
        {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
    );
    //Extraer los valores - prefiero pasar el objeto con sus propiedades
    //const {mascota,propietario,fecha,hora,sintomas} = cita;

    const [error, setError] = useState(false);

    // Función que se ejecuta cada que el usuario escribe un input
    const actualizarState = (e) => {
        //console.log(e.target.name , e.target.value);
        setCita({
            ...cita,
            [e.target.name] : e.target.value            
        });
    }



    //Botón Agregar Cita
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validar
        if (cita.mascota.trim()==='' || cita.propietario.trim()==='' || cita.fecha.trim()==='' || cita.hora.trim()==='' || cita.sintomas.trim()==='') {
            setError(true);
            return; //En validaciones agregamos return para cortar la ejecución
        }
        //Eliminar mensaje error
        setError(false);

        //Le agregamos un id único al estado cita
        cita.id = uuidv4();
        
        crearCita(cita); //Recibida es una función recibida desde App.js

        //Limpiar Campos
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });


    }



    return (
        <>
            <h2>Crear Cita</h2>
            {error? //error es del estado
                <p className="alerta-error">Todos los campos son Obligatorios</p>
                : null}
            <form action="" onSubmit={handleSubmit}>
            {error? //error es del estado
                <label className="label-error">Nombre Mascota requerido!!!</label>
                : <label htmlFor="mascota">Nombre Mascota</label>}
                {/* <label htmlFor="mascota">Nombre Mascota</label> */}
                    <input 
                        type="text" 
                        name="mascota" 
                        className='u-full-width'
                        placeholder='Nombre Mascota'
                        onChange={actualizarState}
                        value={cita.mascota}
                        />


                <label htmlFor="propietario">Nombre Dueñni</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota '
                    onChange={actualizarState}
                    value={cita.propietario}
                    />

                <label htmlFor="fecha">Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className='u-full-width'
                    onChange={actualizarState}
                    value={cita.fecha}
                    />

                <label htmlFor="date">Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className='u-full-width'
                    onChange={actualizarState}
                    value={cita.hora}
                    />

                    <label htmlFor="sintomas">Síntomas</label>
                    <textarea 
                        name="sintomas" 
                        id="" 
                        className='u-full-width'
                        placeholder='Describa los Sintomas' 
                        cols="30" 
                        rows="10"
                        onChange={actualizarState}
                        value={cita.sintomas}
                        ></textarea>

                    <button type="submit" className='u-full-width button-primary'>Agregar Cita</button>
            </form>
        </>
    );
}

export default Formulario;