import { dateRandomGenerate, numberAvarageReviews, numberRandom,getSunday } from 'utils'

export const ORDERS = [
  {
    id: 1,
    idTray: 4093,
    userId: 355102,
    tecnicalId: 2,
    dateChance: '2021-8-21',
    period: 'morning',
    status: 'completed',
    review: null
  },
  {
    id: 2,
    idTray: 4093,
    userId: 355102,
    tecnicalId: 2,
    dateChance: '2021-8-12',
    period: 'morning',
    status: 'canceled',
    review: null
  },
  {
    id: 4,
    idTray: 4093,
    userId: 355102,
    tecnicalId: 11,
    dateChance: '2021-8-12',
    period: 'evening',
    status: 'pendenting',
    review: null
  },
  {
    id: 10,
    idTray: 4093,
    userId: 355082,
    tecnicalId: 2,
    dateChance: '2021-8-11',
    period: 'morning',
    status: 'completed',
    review: null
  },
  {
    id: 12,
    idTray: 4093,
    userId: 355082,
    tecnicalId: 11,
    dateChance: '2021-8-23',
    period: 'morning',
    status: 'pendenting',
    review: null
  },
  {
    id: 13,
    idTray: 4093,
    userId: 355082,
    tecnicalId: 11,
    dateChance: '2021-8-27',
    period: 'evening',
    status: 'appointment',
    review: null
  },
  {
    id: 14,
    idTray: 4093,
    userId: 355082,
    tecnicalId: 11,
    dateChance: '2021-8-27',
    period: 'morning',
    status: 'completed',
    review: 4
  }
]

export const TECNICALS = [
  {
    id: 1,
    name: 'Assistente 01',
    responsible: 'Cassio',
    email: 'cassio@bravox.com.br',
    localization: {
      lat: -23.5077632,
      lng: -46.3372288
    },
    state: 'SP',
    city: 'Poá',
    address: {
      logradouro: 'Rua Augusto dos Santos',
      number: '32'
    },
    reviews: {
      amount: 22,
      avarage: 4
    },
    availableDate: [
      {
        dateAvaliable: '2021-8-26',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 12
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 0
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 3
          }
        ]
      },
      {
        dateAvaliable: '2021-8-23',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 3
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 2
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 1
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Assistente 02',
    responsible: 'Nathanael',
    localization: {
      lat: -23.463246331550348,
      lng: -46.02172851562501
    },
    state: 'RJ',
    city: 'Rio de Janeiro',
    address: {
      logradouro: 'Av. Prudente',
      number: '1422'
    },
    reviews: {
      amount: 45,
      avarage: 3
    },
    availableDate: [
      {
        dateAvaliable: '2021-8-30',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 2
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 10
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 4
          }
        ]
      },
      {
        dateAvaliable: '2021-9-4',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 4
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 1
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 2
          }
        ]
      },
      {
        dateAvaliable: '2021-9-2',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 1
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 0
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 0
          }
        ]
      },
      {
        dateAvaliable: '2021-9-10',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 8
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 19
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 5
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Assistente 03',
    responsible: 'Samara',
    localization: {
      lat: -23.29181053244191,
      lng: -46.527099609375
    },
    state: 'BA',
    city: 'Salvador',
    reviews: {
      amount: 123,
      avarage: 5
    },
    address: {
      logradouro: 'Rua Liberdade',
      number: '765C'
    },
    availableDate: [
      {
        dateAvaliable: '2021-8-28',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 10
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 9
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 4
          }
        ]
      },
      {
        dateAvaliable: '2021-9-10',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 0
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 5
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 5
          }
        ]
      },
      {
        dateAvaliable: '2021-9-11',
        count: [
          {
            period: 'morning',
            label: 'Manhã',
            amount: 22
          },
          {
            period: 'evening',
            label: 'Tarde',
            amount: 13
          },
          {
            period: 'night',
            label: 'Noite',
            amount: 11
          }
        ]
      }
    ]
  }
]

export const TECNICALS_API = [
  {
    ID: 2,
    LATITUDE: -23.536631,
    LONGITUDE: -46.64064,
    ESTADO: 'SP',
    MUNICIPIO: 'SAO PAULO',
    NOME: 'LINHA ACUSTICA',
    ENDERECO: 'R GENERAL OSORIO, 222 CJ 13',
    BAIRRO: 'SANTA IFIGENIA',
    CEP: 1213000,
    TELEFONE: '() 1',
    CELULAR: '',
    WHATSAPP: '',
    CONTATO: 'TESTE 01',
    EMAIL: 'linhaacustica@terra.com.br',
    closestDate: dateRandomGenerate(2, 7),
    reviews_total: numberRandom(),
    reviews_avarage: numberAvarageReviews(),
    calenderTecnical: [
      {
        dateCalender: dateRandomGenerate(1, 7),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(8, 10),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(11, 14),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(15, 19),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(20, 24),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(25, 28),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      }
    ]
  },
  {
    ID: 3,
    LATITUDE: 0,
    LONGITUDE: 0,
    ESTADO: 'SP',
    MUNICIPIO: 'SAO PAULO',
    NOME: 'LINHA ACUSTICA',
    ENDERECO: 'R GENERAL OSORIO, 222 CJ 13',
    BAIRRO: 'SANTA IFIGENIA',
    CEP: 1213000,
    TELEFONE: '() 1',
    CELULAR: '',
    WHATSAPP: '',
    CONTATO: 'TESTE 02',
    EMAIL: 'linhaacustica@terra.com.br',
    closestDate: dateRandomGenerate(2, 7),
    reviews_total: numberRandom(),
    reviews_avarage: numberAvarageReviews(),
    calenderTecnical: [
      {
        dateCalender: dateRandomGenerate(1, 7),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(8, 10),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(11, 14),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(15, 19),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(20, 24),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      },
      {
        dateCalender: dateRandomGenerate(25, 28),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      }
    ]
  },
  {
    ID: 11,
    LATITUDE: -23.65526,
    LONGITUDE: -46.708358,
    ESTADO: 'SP',
    MUNICIPIO: 'SAO PAULO',
    NOME: 'SHIGUEHARU ANDRE PED',
    ENDERECO: 'R SENADOR DANTAS 124',
    BAIRRO: 'SANTO AMARO',
    CEP: 4744050,
    TELEFONE: '(011) 5541-8769',
    CELULAR: '',
    WHATSAPP: 551155418769,
    CONTATO: 'TESTE 03',
    EMAIL: 'xshigueharux@hotmail.com',
    closestDate: dateRandomGenerate(2, 7),
    reviews_total: numberRandom(),
    reviews_avarage: numberAvarageReviews(),
    calenderTecnical: [
      {
        dateCalender: dateRandomGenerate(1, 7),
        periods: [
          { period: 'morning', label: 'Manhã', amount: numberRandom() },
          { period: 'evening', label: 'Tarde', amount: numberRandom() },
          { period: 'night', label: 'Noite', amount: numberRandom() }
        ]
      }
    ]
  }
]

export const TECHNICAL_DAYS = [
  {
    id: 1,
    amount: 100,
    day: '2021-10-20',
    period: 'morning'
  },
  {
    id: 2,
    amount: 98,
    day: '2021-10-16',
    period: 'morning'
  },
  {
    id: 3,
    amount: 10,
    day: '2021-10-21',
    period: 'night'
  },
  {
    id: 4,
    amount: 0,
    day: '2021-10-20',
    period: 'evening'
  },
  {
    id: 5,
    amount: 24,
    day: '2021-10-20',
    period: 'night'
  },
  {
    id: 6,
    amount: 202,
    day: '2021-10-22',
    period: 'morning'
  },
  {
    id: 7,
    amount: 43,
    day: '2021-10-17',
    period: 'morning'
  },
  {
    id: 8,
    amount: 87,
    day: '2021-10-17',
    period: 'evening'
  },
  {
    id: 9,
    amount: 100,
    day: '2021-10-18',
    period: 'morning'
  },
  {
    id: 10,
    amount: 121,
    day: '2021-10-27',
    period: 'evening'
  },
  {
    id: 11,
    amount: 233,
    day: '2021-10-28',
    period: 'night'
  },
  {
    id: 12,
    amount: 100,
    day: '2021-10-30',
    period: 'morning'
  },
  {
    id: 13,
    amount: 3,
    day: '2021-10-30',
    period: 'night'
  }
]

export const REVIEWS_TECHNICAL = [
  {
    id: 1,
    idOrder: 58,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 2,
    idOrder: 200,
    statusOrder: 'completed',
    review: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 3,
    idOrder: 745,
    statusOrder: 'completed',
    review: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 4,
    idOrder: 300,
    statusOrder: 'completed',
    review: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 5,
    idOrder: 1211,
    statusOrder: 'completed',
    review: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 6,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 7,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 8,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 9,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 10,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },

  {
    id: 11,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  },
  {
    id: 12,
    idOrder: 2,
    statusOrder: 'completed',
    review: 4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin efficitur tortor ut dapibus. Cras accumsan lacinia nisi, vel laoreet erat accumsan ut. Maecenas pharetra, justo mattis iaculis ornare, lacus ex hendrerit eros, elementum rhoncus metus urna non magna.'
  }
]

export const INSTALLATIONS_CONFIRMED_LIST = [
  {
    id: 1,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 2,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 3,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 4,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 5,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 6,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 7,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 8,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 9,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 10,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 11,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 12,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 13,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 14,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 15,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 16,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 17,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 18,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 19,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 20,
    idOrder: 143,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  },
  {
    id: 20,
    idOrder: 142,
    idTechnical: 2,
    name_client: 'João Silva',
    id_period: 1,
    period: 'morning',
    date: '2021-10-21',
    status: 'appointment'
  }
]

export const CALENDAR_DAYS = [
  {
    id: 1,
    weekDay: 'Domingo',
    date:getSunday(0),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 2,
    weekDay: 'Segunda-feira',
    date:getSunday(1),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 3,
    weekDay: 'Terça-feira',
    date:getSunday(2),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 4,
    weekDay: 'Quarta-feira',
    date:getSunday(3),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 5,
    weekDay: 'Quinta-feira',
    date:getSunday(4),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 6,
    weekDay: 'Sexta-feira',
    date:getSunday(5),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  },
  {
    id: 7,
    weekDay: 'Sábado',
    date:getSunday(6),
    scheduledPeriods: [
      {
        id: 1,
        period: 'Manhã',
        amount: 0
      },
      {
        id: 2,
        period: 'Tarde',
        amount: 0
      },
      {
        id: 3,
        period: 'Noite',
        amount: 0
      }
    ]
  }
]

export const TECHNICAL_SERVICES_SCHEDULES = [
  {
    idTechnical: 2,
    purchaseNumber: 12334,
    name: 'Fernando Silva',
    period: 'evening',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/Asb3oja.jpg',
        name: 'Subwoofer Bravox P12X-D4 12" 220W RMS',
        amount: 4
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Asb3oja.jpg',
        name: 'Alto Falante Subwoofer Bravox 12 Polegadas 500W RMS 2+2 Ohms Bobina Dupla PUXP 12D-D2',
        amount: 2
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/A11P1eA.jpg',
        name: 'Par Alto-Falante Triaxial Bravox 6" B3X60X 100W RMS',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 2,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 2,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 2,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 2,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 2,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'evening',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'evening',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'evening',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'evening',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  },
  {
    idTechnical: 1,
    purchaseNumber: 53853,
    name: 'Carlos Andrade',
    period: 'morning',
    date: '2021-10-20',
    status: 'pendenting',
    products: [
      {
        id: 1,
        imageProduct: 'https://i.imgur.com/ruKvjYt.jpg',
        name: 'Trixial 6" Bravox B3X60 X 50RMS 4Ohms 60-20K Hz',
        amount: 2
      },
      {
        id: 2,
        imageProduct: 'https://i.imgur.com/Y1ZKUqO.jpg',
        name: 'Par Alto-Falante Quadriaxial 6x9" Bravox B4X69D 300W RMS',
        amount: 1
      },
      {
        id: 3,
        imageProduct: 'https://i.imgur.com/CmA9NIy.jpg',
        name: 'Subwoofer Premium Plus P12x-D4 220Wrms',
        amount: 1
      }
    ]
  }
]
