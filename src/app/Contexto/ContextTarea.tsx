'use client'
import React from 'react'
import { createContext } from 'react'
import { Tarea } from '../Modelos/Tarea'
export const ContextTarea= createContext({
    tarea: [] as Tarea[],
    estado:'' as string,
    agregarTarea: (item: Tarea)=>{},
    editarEstado: (nombre: string)=>{},
    eliminarTarea:(idTarea: number)=>{}
}); 


