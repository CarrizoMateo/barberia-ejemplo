import { motion } from 'framer-motion'
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Heart,
} from 'lucide-react'
import business from '../data/business'

const features = [
  {
    title: 'Precisión',
    text: 'Cada corte es trabajado con atención al detalle para lograr un resultado impecable.',
    icon: Scissors,
  },
  {
    title: 'Experiencia',
    text: 'Años de experiencia y conocimiento para encontrar el estilo que mejor se adapta a vos.',
    icon: Sparkles,
  },
  {
    title: 'Calidad',
    text: 'Utilizamos productos y herramientas profesionales para garantizar el mejor resultado.',
    icon: ShieldCheck,
  },
  {
    title: 'Pasión',
    text: 'Nos apasiona nuestro trabajo y buscamos que cada visita sea una experiencia diferente.',
    icon: Heart,
  },
]

function About() {
  return (
    <section
      id="nosotros"
      className="bg-black px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Nosotros
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Más que un
            <br />
            <span className="text-amber-400">
              corte.
            </span>
          </h2>
        </motion.div>

        {/* DESCRIPCIÓN + ESTADÍSTICAS */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* DESCRIPCIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/50">
              {business.description}
            </p>

            <div className="mt-8 h-px w-full max-w-xl bg-white/10" />

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/30">
              Creemos que un buen corte no es solamente una cuestión de
              apariencia. Es confianza, personalidad y la forma en la que
              elegís mostrarte al mundo.
            </p>
          </motion.div>

          {/* ESTADÍSTICAS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2"
          >
            {business.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-[#080808] p-8 sm:p-10"
              >
                <p
                  className={`font-serif text-5xl font-bold sm:text-6xl ${
                    index === 0 || index === 3
                      ? 'text-amber-400'
                      : 'text-white'
                  }`}
                >
                  {stat.value}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DIFERENCIALES */}
        <div className="mt-20 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group bg-[#080808] p-7 transition-colors duration-300 hover:bg-[#101010]"
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-amber-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {feature.text}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About