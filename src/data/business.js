const business = {
  name: 'Barber Premium',
  shortName: 'BARBERÍA',

  tagline: {
    first: 'Tu estilo.',
    second: 'Tu identidad.',
  },

  description:
    'Una barbería premium donde el estilo, la precisión y la atención personalizada se encuentran.',

  phone: '+54 11 0000-0000',
  whatsapp: '541100000000',

  instagram: '@barberpremium',

  address: 'Av. Ejemplo 1234',
  city: 'San Fernando, Buenos Aires',

  stats: [
    {
      value: '+10',
      label: 'Años de experiencia',
    },
    {
      value: '+500',
      label: 'Clientes',
    },
    {
      value: '4.9',
      label: 'Valoración',
    },
    {
      value: '100%',
      label: 'Pasión',
    },
  ],

  services: [
    {
      name: 'Corte clásico',
      description: 'Corte personalizado adaptado a tu estilo.',
      price: '$8.000',
    },
    {
      name: 'Corte + barba',
      description: 'Corte completo acompañado de perfilado de barba.',
      price: '$12.000',
    },
    {
      name: 'Barba premium',
      description: 'Perfilado, definición y cuidado completo de la barba.',
      price: '$7.000',
    },
    {
      name: 'Experiencia premium',
      description: 'Corte, barba y una experiencia completa de barbería.',
      price: '$15.000',
    },
  ],

  reviews: [
    {
      name: 'Lucas M.',
      date: 'Hace 2 semanas',
      text: 'Excelente atención y un corte impecable. Se nota que trabajan con mucha dedicación. Volveré sin dudas.',
    },
    {
      name: 'Nicolás R.',
      date: 'Hace 1 mes',
      text: 'Muy buen ambiente, profesionales y súper atentos. La mejor barbería que probé hasta ahora.',
    },
    {
      name: 'Martín G.',
      date: 'Hace 2 meses',
      text: 'Siempre salgo conforme. Entienden exactamente lo que uno pide y cuidan muchísimo los detalles.',
    },
  ],

  schedule: [
    {
      day: 'Lunes',
      hours: '09:00 — 20:00',
    },
    {
      day: 'Martes',
      hours: '09:00 — 20:00',
    },
    {
      day: 'Miércoles',
      hours: '09:00 — 20:00',
    },
    {
      day: 'Jueves',
      hours: '09:00 — 20:00',
    },
    {
      day: 'Viernes',
      hours: '09:00 — 21:00',
    },
    {
      day: 'Sábado',
      hours: '09:00 — 18:00',
    },
    {
      day: 'Domingo',
      hours: 'Cerrado',
    },
  ],
}

export default business