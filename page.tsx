"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#e2e8f0]">
      {/* SECCIÓN HERO - ALTA EFICIENCIA */}
      <section className="py-20 text-center bg-white border-b-4 border-blue-600">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4 text-slate-900">
          ALTA EFICIENCIA
        </h1>
        <p className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-10">
          Soto System Digital Solution • B2B SaaS
        </p>
        <Link href="/catalogo">
          <button className="bg-black text-white px-10 py-4 rounded-full font-black hover:bg-blue-600 transition-all uppercase tracking-widest text-[10px]">
            Entrar al Catálogo
          </button>
        </Link>
      </section>

      {/* SECCIÓN SEDES */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['CARACAS', 'VALENCIA', 'MARACAIBO', 'PUERTO ORDAZ'].map((sede) => (
            <div key={sede} className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-200">
              <h3 className="text-xl font-black">{sede}</h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase mt-2">Sede Operativa</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}