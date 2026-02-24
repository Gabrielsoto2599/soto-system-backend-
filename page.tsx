"use client";
import React from 'react';
import productosData from './ventas.json'; 

interface Producto {
  id: number;
  producto: string;
  precio: number;
  stock: number;
  sede: string;
  imagen: string;
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#e2e8f0] pb-20">
      {/* ENCABEZADO: SOTO SYSTEM DIGITAL SOLUTIONS */}
      <header className="max-w-7xl mx-auto pt-16 pb-12 px-4 text-center">
        <div className="inline-block mb-4 px-5 py-2 bg-white/40 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
          <p className="text-[10px] font-black tracking-[0.5em] text-blue-800 uppercase">
            KS ALTA EFICIENCIA • INDUSTRIAL ENGINE
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
          <span className="text-slate-900 drop-shadow-sm">SOTO SYSTEM</span>
          <br className="md:hidden" />
          <span className="bg-gradient-to-r from-[#0061ff] via-[#00c6ff] to-[#60efff] bg-clip-text text-transparent ml-0 md:ml-6 filter drop-shadow-xl">
            DIGITAL SOLUTIONS
          </span>
        </h1>

        <div className="flex justify-center gap-8 text-slate-500 font-bold text-[11px] tracking-[0.3em] uppercase opacity-80">
          <span>SaaS B2B System</span>
          <span className="text-slate-300">|</span>
          <span>Venezuela 2026</span>
        </div>
      </header>

      {/* INVENTARIO HORIZONTAL ESTILO AMAZON/MERCADO LIBRE */}
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid-amazon">
          {productosData.map((item: Producto) => (
            <div key={item.id} className="card-technicolor group">
              
              {/* IMAGEN TOTALMENTE LIMPIA Y FLOTANTE */}
              <div className="image-container">
                <img 
                  src={item.imagen} 
                  alt={item.producto} 
                  className="img-fluid group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              {/* INFORMACIÓN DEL PRODUCTO */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    ● {item.sede}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    STK: <span className="text-slate-900 font-black">{item.stock}</span>
                  </span>
                </div>

                <h3 className="text-[12px] font-black text-slate-800 uppercase leading-tight mb-6 h-10 overflow-hidden group-hover:text-blue-600 transition-colors">
                  {item.producto}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[16px] font-black text-slate-900 tracking-tighter">
                      $ {item.precio.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* BOTÓN CON PROFUNDIDAD Y SOMBRA */}
                  <button className="btn-glow">
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
