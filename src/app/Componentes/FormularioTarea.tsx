'use client'
import { useEffect, useState } from "react";
import { useContextTarea } from "../Providers/TareaProvider";
import { Tarea } from "../Modelos/Tarea";
 
export default function FormularioTarea(){

const [tituloTarea, settituloTarea]= useState<string>('');
const [descripcion,setDescricion]= useState<string>('');
const [estado, setEstado]= useState<string>('');

const {agregarTarea, tarea} = useContextTarea();

function agregarTareaFormulario(e:React.FormEvent){
    e.preventDefault();

    if (tituloTarea=='' || descripcion=='' || estado=='') return
        
    
    const tarea: Tarea ={
        idTarea:Date.now(),
        tituloTarea:tituloTarea,
        descripcion:descripcion,
        estado:estado
    }

    agregarTarea(tarea);
    alert('Tarea Agregada');
   
}
useEffect(()=>{
    alert('Cantidad de tareas en la lista' + tarea.length)
},[tarea])

return(
<div>
    <h2>Formulario Agregar Tarea</h2>
    <form onSubmit={agregarTareaFormulario}>
    <input type="text" placeholder="Titulo de tarea" value={tituloTarea} onChange={(e)=>settituloTarea(e.target.value)} />
    <input type="text" placeholder="Descripcion" value={descripcion} onChange={(e)=>setDescricion(e.target.value)} />
    <input type="text" placeholder="Estado" value={estado} onChange={(e)=>setEstado(e.target.value)} />
    
    <button type="submit">Agregar Tarea</button>

    
      
    
    </form>
</div>
)
}