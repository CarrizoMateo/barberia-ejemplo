import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import images from '../assets/images'

const gallery = [
  {
    image: images.gallery[0],
    title: 'Barba definida',
    category: 'Barba',
  },
  {
    image: images.gallery[1],
    title: 'Orden y estilo',
    category: 'Lugar',
  },
    
  {
    image: images.gallery[2],
    title: 'Estilo clásico',
    category: 'Cortes',
  },
  {
    image: images.gallery[3],
    title: 'Barber moderna',
    category: 'Lugar',
  },
]

function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-black px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Nuestro trabajo
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            El estilo
            <br />
            <span className="text-amber-400">
              habla solo.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-white/50">
            Una selección de nuestros trabajos. Cada corte es diferente,
            porque cada cliente también lo es.
          </p>
        </motion.div>

        {/* GALERÍA */}
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative h-[420px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OSCURECIMIENTO */}
              <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/50" />

              {/* INFORMACIÓN */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs uppercase tracking-[0.3em] text-amber-400">
                  {item.category}
                </span>

                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Gallery