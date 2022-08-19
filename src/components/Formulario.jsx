import React, {useState} from 'react';



const Formulario = () => {

    //Crear citas
    const [cita, actualizarCita] = useState(
        {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
    );
    
    // Función que se ejecuta cada que el usuario escribe un input
    const actualizarState = () => {
        console.log('Escribiendo');
    }

    return (
        <>
            <h2>Crear Cita</h2>
            <form action="">
                <label htmlFor="mascota">Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    />

                <label htmlFor="duenio">Nombre Dueñni</label>
                <input 
                    type="text" 
                    name="duenio" 
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota '
                    onChange={actualizarState}
                    />

                <label htmlFor="fecha">Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className='u-full-width'
                    onChange={actualizarState}
                    />

                <label htmlFor="date">Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className='u-full-width'
                    onChange={actualizarState}
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
                        ></textarea>

                    <button type="submit" className='u-full-width button-primary'>Agregar Cita</button>
            </form>
        </>
    );
}

export default Formulario;