'use client'
import React, { useState } from 'react'
import { useContextTarea } from '../Providers/TareaProvider';

export default function EditarTarea() {

    const {editarEstado} = useContextTarea();
    const [estado,setEstado] =useState<string>('');
  return (
    <div><h2>Editar Estado</h2>

      <label>Estado:</label>
      <input
        name="Estado actual"
        value={estado}
        onChange={(e)=>setEstado(e.target.value)}
        placeholder="Escribe aqui"
      />

      <br />


      <button onClick={() => editarEstado(estado)}>Aplicar Cambios</button>

      <hr />

      <h3>Estado actual de la tarea:</h3>
      <p>Estado: {estado}</p>
      </div>
  )
}
