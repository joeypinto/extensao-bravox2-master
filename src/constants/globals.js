import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export const PAGINATION_AMOUNT = 15
export const ENDPOINT = 'https://api.bravox.com.br/oficina/listar'

export const SHIMMER = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

export const TOBASE64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const LINKS_FOOTER = [
  {
    id: 1,
    name: 'footer_top',
    columns: [
      {
        id: 1,
        column: 'Central de Atendimento',
        linkList: [
          {
            id: 1,
            link: 'https://www.bravox.com.br/Entrega',
            label: 'Entregas',
            exclused: {}
          },
          {
            id: 2,
            link: 'https://checkout.bravox.com.br/MinhaConta/Pedido/',
            label: 'Pedidos',
            exclused: {}
          },
          {
            id: 3,
            link: 'https://www.bravox.com.br/TrocaseDevolucoes',
            label: 'Trocas e Devoluções',
            exclused: {}
          },
          {
            id: 4,
            link: 'https://www.bravox.com.br/FormasPagamento',
            label: 'Pagamentos',
            exclused: {}
          },
          {
            id: 5,
            link: 'https://www.bravox.com.br/ofertas_especiais',
            label: 'Produtos',
            exclused: {}
          }
        ]
      },
      {
        id: 2,
        column: 'Fale Conosco',
        linkList: [
          {
            id: 1,
            link: 'https://www.bravox.com.br/faleconosco',
            label: 'Atendimento',
            exclused: {}
          },
          {
            id: 2,
            link: 'tel:+551140138211',
            label: '(11) 4013-8211',
            exclused: {
              type: 'phone',
              icon: '',
              text: '',
              textTarget: ''
            }
          },
          {
            id: 3,
            link: '',
            label:
              'Horário de Atendimento: <br /> De Segunda à Sexta das 7h às 17h',
            exclused: {}
          },
          {
            id: 5,
            link: '',
            label: '',
            exclused: {
              type: 'contact',
              icon: faPhoneAlt,
              text: 'SUPORTE TÉCNICO',
              textTarget: '4003-2035'
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'footer_bottom',
    columns: [
      {
        id: 1,
        column: 'politics_terms',
        linkList: [
          {
            id: 1,
            link: 'https://www.bravox.com.br/PoliticaDePrivacidade',
            label: 'Política de Privacidade',
            exclused: {}
          },
          {
            id: 2,
            link: 'https://www.bravox.com.br/ContratoDeCompraEVenda',
            label: 'Termos de Uso',
            exclused: {}
          }
        ]
      },
      {
        id: 2,
        column: 'institutional',
        linkList: [
          {
            id: 1,
            link: '',
            label:
              '2020 © Bravox S/A Indústria e Comércio Eletrônico Ltda .Todos os direitos reservados.',
            exclused: {}
          },
          {
            id: 2,
            link: '',
            label:
              'Av. Caetano Ruggieri, 3106. 13310-160. Pq. Ns. Sra. Candelária. Itu. SP.',
            exclused: {
              type: 'address',
              icon: '',
              text: '',
              textTarget: ''
            }
          }
        ]
      },
      {
        id: 3,
        column: 'social',
        linkList: [
          {
            id: 1,
            link: '',
            label: 'Siga nossas <br /> redes sociais:',
            exclused: {}
          },
          {
            id: 2,
            link: 'https://www.facebook.com/bravox.oficial/',
            label: '',
            exclused: {
              type: 'social',
              icon: faFacebookF,
              text: '',
              textTarget: ''
            }
          },
          {
            id: 3,
            link: 'https://www.instagram.com/bravox.oficial',
            label: '',
            exclused: {
              type: 'social',
              icon: faInstagram,
              text: '',
              textTarget: ''
            }
          }
        ]
      }
    ]
  }
]

export const ENDPOINT_VIACEP = (cep) => `https://viacep.com.br/ws/${cep}/json/`

export const FILTERS_PREVIEW_INIT = {
  filterPrimaryCep: {
    uuid: '',
    type: '',
    filterLabel: '',
    filterValue: ''
  },
  filterPrimaryState: {
    uuid: '',
    type: '',
    filterLabel: '',
    filterValue: ''
  },
  filterPrimaryCity: {
    uuid: '',
    type: '',
    filterLabel: '',
    filterValue: ''
  },
  filterPrimaryDistance: {
    uuid: '',
    type: '',
    filterLabel: '',
    filterValue: ''
  }
}

export const PERIODS = {
  morning: {
    label: 'Manhã',
    value: 'morning'
  },
  evening: {
    label: 'Tarde',
    value: 'evening'
  },
  night: {
    label: 'Noite',
    value: 'night'
  }
}

export const STATUS_LIST = [
  {
    id: 1,
    label: 'Pendente',
    value: 'pendenting'
  },
  {
    id: 2,
    label: 'Cancelado',
    value: 'canceled'
  },
  {
    id: 3,
    label: 'Concluído',
    value: 'completed'
  },
  {
    id: 4,
    label: 'Agendado',
    value: 'appointment'
  }
]
