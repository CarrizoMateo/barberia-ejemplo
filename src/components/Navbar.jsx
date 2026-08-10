import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import business from '../data/business'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="#inicio"
          onClick={handleLinkClick}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-amber-400/50 bg-amber-400/10">
            <span className="font-serif text-xl font-bold text-amber-400">
              B
            </span>
          </div>

          <div className="leading-none">
            <span className="block font-serif text-lg font-semibold tracking-[0.2em] text-white">
              {business.shortName}
            </span>

            <span className="block mt-1 text-[9px] tracking-[0.45em] text-amber-400">
              PREMIUM
            </span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contacto"
            className="ml-2 border border-amber-400 bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-amber-400"
          >
            RESERVAR TURNO
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        className="overflow-hidden border-t border-white/10 bg-black md:hidden"
      >
        <div className="flex flex-col px-6 py-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="border-b border-white/10 py-4 text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-amber-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-5 bg-amber-400 px-5 py-3 text-center text-sm font-bold tracking-wide text-black"
          >
            RESERVAR TURNO
          </a>
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar