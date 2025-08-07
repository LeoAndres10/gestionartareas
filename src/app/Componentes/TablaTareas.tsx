'use client'
import React from "react";
import { useContextTarea } from "../Providers/TareaProvider";

export default function TablaTareas(){
    const {tarea,eliminarTarea}= useContextTarea();

    return(
        <div>

            <h2>Lista de Tareas</h2>

            <table>

            <thead>
                <th>ID Tarea</th>
                <th>Titulo de Tarea</th>
                <th>Descripcion de Tarea</th>
                <th>Estado de Tarea</th>
                <th>Eliminar Tarea</th>
            </thead>

            <tbody>
                {
                    tarea.map((tarea)=>(
                        <tr key={tarea.idTarea}>
                            <td>{tarea.idTarea}</td>
                            <td>{tarea.tituloTarea}</td>
                            <td>{tarea.descripcion}</td>
                            <td>{tarea.estado}</td>
                            <td><button onClick={()=>eliminarTarea(tarea.idTarea)}>Eliminar Tarea</button></td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>

    )
}