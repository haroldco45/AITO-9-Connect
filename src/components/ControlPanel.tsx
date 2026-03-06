import React from 'react';

const ControlPanel = () => {
  const acciones = [
    { id: 1, nombre: 'Encender Luces', icono: '💡' },
    { id: 2, nombre: 'Abrir Maletero', icono: '🚗' },
    { id: 3, nombre: 'Climatización', icono: '❄️' },
    { id: 4, nombre: 'Modo Centinela', icono: '🛡️' },
  ];

  return (
    <section className="mt-12 bg-zinc-900/30 p-8 rounded-[2.5rem] border border-zinc-800/50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-xs uppercase tracking-[0.3em] font-bold">Controles Rápidos</h3>
        <span className="text-[10px] text-zinc-600 italic">app desarrollada por vibras positivas derecho de autor (3117700431)</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {acciones.map((accion) => (
          <button
            key={accion.id}
            className="flex flex-col items-center justify-center p-6 bg-zinc-800/40 rounded-2xl border border-transparent hover:border-red-600/50 hover:bg-zinc-800 transition-all group"
          >
            <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{accion.icono}</span>
            <span className="text-xs font-medium text-zinc-300 group-hover:text-white">{accion.nombre}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
         <p className="text-[9px] text-zinc-700 uppercase tracking-widest border-t border-zinc-800 pt-4 w-full text-center">
           Tecnología de Control AITO-Vision | VP 2026
         </p>
      </div>
    </section>
  );
};

export default ControlPanel;
