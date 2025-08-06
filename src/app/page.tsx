'use client'
import Image from "next/image";
import TareaProvider from "./Providers/TareaProvider";
import FormularioTarea from "./Componentes/FormularioTarea";
import TablaTareas from "./Componentes/TablaTareas";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h2>Aplicacion de Tareas</h2>

      <TareaProvider>
        <FormularioTarea>
        </FormularioTarea>
        <TablaTareas></TablaTareas>
      </TareaProvider>
    </main>
    </div>
  );
}
