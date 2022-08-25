import React from 'react';
import styles from './Cita.module.css';


const Cita = ({citasPactadas,eliminarCita}) => {
    return (
    <>
        <div className={styles.cita}>
            <p>Mascota: <span>{citasPactadas.mascota}</span></p>
            <p>Dueño: <span>{citasPactadas.propietario}</span></p>
            <p>Fecha: <span>{citasPactadas.fecha}</span></p>
            <p>Hora: <span>{citasPactadas.hora}</span></p>
            <p>Sintoma: <span>{citasPactadas.sintomas}</span></p>
            <button                 
                className="button eliminar u-full-width"
                onClick={()=> eliminarCita(citasPactadas)} //Se debe usar una arrow para que se ejecute solo al darle click
                >Eliminar</button>
        </div>
    </>
    );
}
//className={`styles.button styles.eliminar styles.u-full-width`}
//className="button eliminar u-full-width"
export default Cita;