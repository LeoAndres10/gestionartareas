import React, { ReactNode, useContext, useState } from 'react'
import { ContextTarea } from '../Contexto/ContextTarea'
import { Tarea } from '../Modelos/Tarea'

interface Plantilla{
    children: ReactNode
}

export default function TareaProvider(props:Plantilla) {
    const [tarea,setTarea]=useState<Tarea[]>([]);
    const [estado,setEstado]=useState<string>('');

    function agregarTarea(item:Tarea){
        setTarea([...tarea,item]);
    }
     
    

function editarEstado(estado:string){
    setEstado(estado)
}

 
        return (
    <ContextTarea.Provider value={{tarea,estado,agregarTarea,editarEstado}}>
        {props.children}
    </ContextTarea.Provider>
  )
}
export function useContextTarea(){
    return useContext(ContextTarea)
}