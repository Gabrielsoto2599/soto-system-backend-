import "./globals.css";

export const metadata = {
  title: "KS-Alta Eficiencia | Ecosistema B2B",
  description: "Gestión Centralizada de Lubricantes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        {/* NAV GLOBAL: Reutilizando tu diseño de la Fase 1 */}
        <nav className="flex items-center justify-between bg-black px-6 md:px-12 py-4 sticky top-0 z-50 shadow-2xl border-b-2 border-amber-600">
          <div className="font-black text-white text-xl md:text-2xl tracking-tighter">
            KS <span className="text-amber-500 italic uppercase">Alta Eficiencia</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/catalogo" className="text-gray-300 hover:text-amber-500 font-bold text-sm transition uppercase tracking-widest">Catálogo B2B</a>
            <a href="/login" className="text-amber-500 hover:bg-amber-500 hover:text-black border border-amber-500 px-6 py-2 rounded-full text-xs font-black transition duration-300 uppercase tracking-widest">
                Acceso Distribuidor
            </a>
          </div>

          <div className="flex items-center gap-3 cursor-pointer bg-gray-900 px-4 py-2 rounded-xl border border-gray-800 hover:border-amber-500 transition duration-300">
            <span className="text-xl">🛒</span>
            <span className="bg-amber-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg">0</span>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}


