import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


const App = () => {

    //Citas en localStorage
    let citasInicialesLocalStorage = JSON.parse(localStorage.getItem('citasPactadas'));
    if (!citasInicialesLocalStorage) {
        citasInicialesLocalStorage = []; 
    } //Si tien ecitas las gaurda en es "useState"

    //Arreglo de las citas
    const [citasPactadas, setCitasPactadas] = useState(citasInicialesLocalStorage);

    const crearCita = (cita) => { //Cita se recibe desde el formulario
        //Así tomamos los datos del formulario y los agregamos a un nuevo estado que contiene todos
        setCitasPactadas( [...citasPactadas, cita  ] );
        //no olvidar los corchetes xq es un arreglo 
        //en react no se usa el citasPactadas.push(cita), eso es en JS
    }

    //Eliminar una cita por su ID
    const eliminarCita = (citaEliminada) => { //Recibe el parametro desde "Cita.jsx"
        //console.log(citaEliminada.id);
        //filter itera en todas las citas igual que un map
        // con !== obtiene todos los registros creando un nuevo array excepto el filtrado
        const nuevasCitas = citasPactadas.filter((cita) => cita.id !== citaEliminada.id);
        setCitasPactadas(  nuevasCitas   );
    }

    //Mensaje Condicional    
    const titulo_citas = citasPactadas.length === 0 ? 'No hay Citas' : 'Administra tus citas';

    //Esta es otra manera de mostrar sin llenar de código en html
    let cita_map = <p>No hay Citas</p>
    if (citasPactadas.length > 0) {
        cita_map = citasPactadas.map((citasPactadas)=>(
            <Cita 
                key={citasPactadas.id}
                citasPactadas={citasPactadas}
                eliminarCita={eliminarCita}
                />
        ))
    }




    //useEffect - Ciclos de vida 
    //equivale a componentDidMount y componentDidUpdate, escucha cada vez que cambia
    useEffect( ()=>{ //Se ejecuta cuando el componente está listo o cuando hay cambios en el mismo
        let citasInicialesLocalStorage = JSON.parse(localStorage.getItem('citasPactadas')); //Redeclaramos para evitar errores
        if (citasInicialesLocalStorage) {//Si tiene citas en LocalStorage, guarda las citasPactadas en Local, las estaría actualizando
            localStorage.setItem('citasInicialesLocalStorage', JSON.stringify(citasPactadas));
        }else{//Si no hay citas "eliminamos" agrega un arreglo vacío
            localStorage.setItem('citasInicialesLocalStorage', JSON.stringify([]));
        }
        
    },[citasPactadas]); //Par que se ejecute una sola vez debemos agregarle un arreglo vacío al final
    //Si le pasamos un hook como "citasPactadas", este trabajará cada vez que este cambie


    

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
                    <h2>{titulo_citas}</h2>
                    {cita_map}
                    {/* {citasPactadas.map((citasPactadas)=>(
                        <Cita 
                            key={citasPactadas.id}
                            citasPactadas={citasPactadas}
                            eliminarCita={eliminarCita}
                            />
                    ))} */}
                </div>
            </div>
        </div>

    </>
    );
}



export default App;