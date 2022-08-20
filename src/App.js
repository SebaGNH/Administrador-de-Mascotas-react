import React, {useState} from 'react';
import Formulario from './components/Formulario';


const App = () => {
    //Arreglo de las citas
    const [citasPactadas, setCitasPactadas] = useState([]);

    const crearCita = (cita) => { //Cita se recibe desde el formulario
        //Así tomamos los datos del formulario y los agregamos a un nuevo estado que contiene todos
        setCitasPactadas( [...citasPactadas, cita  ] );
        //no olvidar los corchetes xq es un arreglo 
        //en react no se usa el citasPactadas.push(cita), eso es en JS
    }


    return ( 
    <>
        {/* <h1>Administrador de Pacientes</h1> //Lo borro temporalmente para usar toda la pantalla*/}
        <div className='container'>
            <div className="row">
                <div className="one-half column">
                    <Formulario
                        crearCita={crearCita}
                    />
                </div>
                <div className="one-half column">
                    2
                </div>
            </div>
        </div>

    </>
    );
}

export default App;