export function Footer() {
  return (
    <footer className="bg-black text-white/60 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-white text-xl tracking-tight">
              ARCH<span className="font-light">STUDIO</span>
            </div>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} ArchStudio. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
