import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import styles from './Formulario.module.css'

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
                <p className={styles.alerta_error}>Todos los campos son Obligatorios</p>
                : null}
            <form action="" onSubmit={handleSubmit} className={styles.form}>
            {error? //error es del estado
                <label className={styles.label_error}>Nombre Mascota requerido!!!</label>
                : <label className={styles.lbl_input} htmlFor="mascota">Nombre Mascota</label>}
                {/* <label htmlFor="mascota">Nombre Mascota</label> */}
                    <input 
                        type="text" 
                        name="mascota" 
                        className='u-full-width'
                        placeholder='Nombre Mascota'
                        onChange={actualizarState}
                        value={cita.mascota}
                        />


                <label className={styles.lbl_input} htmlFor="propietario">Nombre Dueñni</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota '
                    onChange={actualizarState}
                    value={cita.propietario}
                    />

                <label className={styles.lbl_input} htmlFor="fecha">Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className={`${styles.input_date_time} u-full-width`}
                    onChange={actualizarState}
                    value={cita.fecha}
                    />

                <label className={styles.lbl_input} htmlFor="hora">Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className={`${styles.input_date_time} u-full-width`}
                    onChange={actualizarState}
                    value={cita.hora}
                    />

                    <label className={styles.lbl_input} htmlFor="sintomas">Síntomas</label>
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

//No me está mostranod la info en consola
Formulario.protoTypes = {
    crearCita: PropTypes.func.isRequired
}



export default Formulario;