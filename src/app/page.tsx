import AitoCard from '@/components/AitoCard';
import ControlPanel from '@/components/ControlPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 selection:bg-red-600">
      {/* Header con estilo HarmonyOS de Huawei */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-light tracking-tighter">
            AITO <span className="font-black text-red-600 italic">M9</span>
          </h1>
          <p className="text-zinc-500 text-[10px] mt-1 tracking-[0.2em] uppercase">
            Sistema de Gestión Inteligente
          </p>
        </div>
        <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-4 md:pr-4">
          <p className="text-sm font-black tracking-widest text-zinc-200 uppercase">Vibras Positivas</p>
          <p className="text-[10px] text-zinc-500 leading-tight">
            App desarrollada por vibras positivas<br/>
            derecho de autor (3117700431)
          </p>
        </div>
      </header>

      {/* Sección de Indicadores (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AitoCard titulo="Energía" valor="92" subtitulo="%" porcentaje={92} />
        <AitoCard titulo="Presión Neumáticos" valor="35" subtitulo="PSI" color="zinc" />
        <AitoCard titulo="Temperatura" valor="21" subtitulo="°C" color="blue" />
      </div>

      {/* Sección de Acciones (Control Panel) */}
      <div className="mt-8">
        <ControlPanel />
      </div>
      
      {/* Footer de Propiedad Intelectual */}
      <footer className="mt-16 text-center">
         <div className="inline-block px-6 py-2 border border-zinc-800 rounded-full bg-zinc-900/20">
            <p className="text-[9px] text-zinc-600 tracking-widest uppercase font-bold">
              © 2026 AITO CONNECT | DISTRILECO & VIBRAS POSITIVAS
            </p>
         </div>
      </footer>
    </main>
  );
}
