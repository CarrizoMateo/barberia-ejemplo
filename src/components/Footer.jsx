import { ArrowUp, MessageCircle } from 'lucide-react'
import business from '../data/business'

function Footer() {
  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <footer className="w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-5 py-16 sm:px-6 lg:px-8">

        {/* PARTE SUPERIOR */}
        <div className="flex min-w-0 flex-col justify-between gap-10 md:flex-row">

          {/* LOGO */}
          <div className="min-w-0">
            <a
              href="#inicio"
              className="inline-flex max-w-full items-center gap-3"
            >
              <div className="flex h-15 w-15 shrink-0 items-center justify-center border border-amber-400/50 bg-amber-400/10">
                <span className="font-serif text-xl font-bold text-amber-400">
                  <img src="./public/Faruh - Logo.png" alt="Logo Barbería Faruh" />
                </span>
              </div>

              <div className="min-w-0">
                <span className="block truncate font-serif text-lg font-semibold tracking-[0.15em] text-white sm:tracking-[0.2em]">
                  {business.shortName}
                </span>

                <span className="mt-1 block text-[8px] tracking-[0.35em] text-amber-400 sm:text-[9px] sm:tracking-[0.45em]">
                  BARBERÍA
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/35">
              Estilo, precisión y atención en cada detalle.
              Tu imagen merece una experiencia a la altura.
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

              {/* INSTAGRAM */}
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                <span className="text-sm font-bold">
                  IG
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
              >
                <MessageCircle size={18} />
              </a>

            </div>

            <p className="mt-4 text-xs text-white/25">
              {business.instagram}
            </p>
          </div>

        </div>

        {/* SEPARADOR */}
        <div className="my-12 h-px bg-white/10" />

        {/* PARTE INFERIOR */}
        <div className="flex min-w-0 flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>

          <a
            href="#inicio"
            className="group flex shrink-0 items-center gap-2 text-xs uppercase tracking-wider text-white/40 transition-colors hover:text-amber-400"
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