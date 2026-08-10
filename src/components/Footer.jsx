import { ArrowUp, MessageCircle } from 'lucide-react'

function Footer() {
  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* PARTE SUPERIOR */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* LOGO */}
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-amber-400/50 bg-amber-400/10">
                <span className="font-serif text-xl font-bold text-amber-400">
                  B
                </span>
              </div>

              <div>
                <span className="block font-serif text-lg font-semibold tracking-[0.2em] text-white">
                  BARBER
                </span>

                <span className="mt-1 block text-[9px] tracking-[0.45em] text-amber-400">
                  PREMIUM
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/35">
              Estilo, precisión y experiencia.
              Tu imagen merece el mejor cuidado.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Navegación
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-amber-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* REDES */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Seguinos
            </p>

            <div className="mt-5 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-bold">
                  IG
                </span>
              </a>

              <a
                href="https://wa.me/541100000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                <MessageCircle size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="my-12 h-px bg-white/10" />

        {/* PARTE INFERIOR */}
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Barber Premium. Todos los derechos
            reservados.
          </p>

          <a
            href="#inicio"
            className="group flex items-center gap-2 text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-amber-400"
          >
            Volver arriba

            <ArrowUp
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer