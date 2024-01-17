import TareaFormulario from "./TareaFormulario";
import { useState } from "react";
import Tarea from "./Tarea";
import "../hojas-de-estilo/ListaDeTareas.css"

const ListaDeTareas = () => {
    const [tareas,setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas =[tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

  return (
    <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea)=>
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                    />
                
                )
            }
        </div>
    </>
  )
}

export default ListaDeTareas