import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      {/* Header con Marca Personal */}
      <header className="w-full max-w-6xl flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter">AITO 9 <span className="text-red-600">HUAWEI</span></h1>
        <div className="text-right">
          <p className="text-xs text-zinc-500 font-bold">VIBRAS POSITIVAS</p>
          <p className="text-[10px] text-zinc-600">Derecho de autor (3117700431)</p>
        </div>
      </header>

      {/* Grid del Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        
        {/* Card de Batería */}
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-2xl">
          <p className="text-zinc-500 text-sm uppercase">Autonomía</p>
          <h2 className="text-5xl font-bold mt-2">85<span className="text-xl text-zinc-400">%</span></h2>
          <div className="w-full bg-zinc-800 h-1.5 mt-4 rounded-full">
            <div className="bg-red-600 h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
          </div>
        </div>

        {/* Card de Estado del Vehículo */}
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800 flex flex-col justify-center items-center">
           <span className="text-green-500 text-xs font-mono animate-pulse">● SISTEMA LISTO</span>
           <p className="mt-2 text-zinc-300">Vehículo Estacionado</p>
        </div>

        {/* Card de Climatización */}
        <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
          <p className="text-zinc-500 text-sm">Temperatura Interior</p>
          <h2 className="text-3xl font-semibold mt-1">22°C</h2>
          <button className="mt-4 w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all">
            Ajustar Clima
          </button>
        </div>

      </div>

      {/* Pie de página con marca */}
      <footer className="mt-auto pt-12 text-zinc-700 text-[10px] uppercase tracking-[0.2em]">
        App desarrollada por Vibras Positivas • 2026
      </footer>
    </main>
  );
}
