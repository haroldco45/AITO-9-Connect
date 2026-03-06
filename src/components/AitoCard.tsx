import React from 'react';

interface AitoCardProps {
  titulo: string;
  valor: string;
  subtitulo?: string;
  porcentaje?: number;
  color?: string;
}

const AitoCard: React.FC<AitoCardProps> = ({ titulo, valor, subtitulo, porcentaje, color = "red" }) => {
  return (
    <div className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-md p-6 rounded-[2rem] border border-zinc-800 hover:border-zinc-700 transition-all group">
      
      {/* Sello de Marca Sutil */}
      <div className="absolute top-2 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <span className="text-[8px] font-bold text-white tracking-widest">VP - 3117700431</span>
      </div>

      <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">{titulo}</p>
      
      <div className="mt-3 flex items-baseline gap-2">
        <h2 className="text-4xl font-bold text-white">{valor}</h2>
        {subtitulo && <span className="text-zinc-400 text-sm">{subtitulo}</span>}
      </div>

      {/* Barra de progreso si hay porcentaje (ej. Batería) */}
      {porcentaje !== undefined && (
        <div className="mt-6">
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 bg-${color}-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]`}
              style={{ width: `${porcentaje}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-zinc-600 mt-2 font-mono italic">
            Optimizado por Vibras Positivas
          </p>
        </div>
      )}
    </div>
  );
};

export default AitoCard;
