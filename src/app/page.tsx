import AitoCard from '@/components/AitoCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-light tracking-tighter italic">AITO <span className="font-black text-red-600">M9</span></h1>
          <p className="text-zinc-500 text-xs mt-1">SISTEMA DE GESTIÓN INTELIGENTE</p>
        </div>
        <div className="text-right border-r-2 border-red-600 pr-4">
          <p className="text-sm font-bold tracking-widest">VIBRAS POSITIVAS</p>
          <p className="text-[10px] text-zinc-500">App desarrollada por vibras positivas derecho de autor (3117700431)</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AitoCard titulo="Energía" valor="92" subtitulo="%" porcentaje={92} />
        <AitoCard titulo="Presión Neumáticos" valor="35" subtitulo="PSI" color="zinc" />
        <AitoCard titulo="Temperatura" valor="21" subtitulo="°C" color="blue" />
      </div>
      
      <footer className="mt-20 opacity-20 text-center">
         <p className="text-[10px]">© 2026 AITO CONNECT - VP EDITION</p>
      </footer>
    </main>
  );
}
