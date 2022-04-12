import { createContext, useContext, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { v4 as uuidv4 } from 'uuid'
import { distance, point } from '@turf/turf'
import { GlobalContext } from './globalContext'
import ModalAlert from 'components/ModalAlert'
import { FILTER_INIT, MAP_CONSTANTS } from 'constants/map'
import { ENDPOINT_VIACEP, FILTERS_PREVIEW_INIT } from 'constants/globals'
import { serverPath } from './../utils/index';


export const MapContext = createContext()

const MapContextProvider = ({ children,orderId }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(
    MAP_CONSTANTS.MAP_FILTER_TECNICALS
  )
  const [isFilterCurrency, setIsFilterCurrency] = useState([])
  const [listAssistentsTecnicals, setListAssistentsTecnicals] = useState([])
  const [order, setOrder] = useState([])
  const [scheduling, setScheduling] = useState({
    period: '',
    dateScheduling: '',
    schedulinglabel: ''
  })
  const [assistentsTecnicaslSelected, setAssistentsTecnicaslSelected] =
    useState(0)
  const [listAssistentsTecnicalsFiltred, setListAssistentsTecnicalsFiltred] =
    useState([])
  const [filterTecnicalsSelected, setFilterTecnicalsSelected] = useState('')
  const [filterDistanceSelected, setFilterDistanceSelected] = useState('')
  const [listTecnicalbyCep, setListTecnicalbyCep] = useState('')
  const [isOpenFiltersMobile, setIsOpenFiltersMobile] = useState(false)
  const [filtersPrimaryFormPreview, setFiltersPrimaryFormPreview] =
    useState(FILTERS_PREVIEW_INIT)
  //choosing, postalCode, locatorUF
  const [isShowFilter, setIsShowFilter] = useState('choosing')

  //Uso do contexto global para abrir modal
  const ctxGlobal = useContext(GlobalContext)

  const searchPostalCodeForCep = async (cep) => {
    const dataPostalCode = await fetch(ENDPOINT_VIACEP(cep))
      .then((resp) => resp.json())
      .then((data) => {
        return data
      })
      .catch((err) => {

        let infoModal = {
          title: 'CEP Inválido',
          body: '<p>Não foi possível encontrar seu CEP, por favor verifique o CEP informado.</p>',
          type: 'error'
        }
        ctxGlobal.setInformationsModal(infoModal)
        ctxGlobal.toggleModalContainer('alert')
        return { uf: 'SP' }
      })

    return dataPostalCode || { uf: 'SP' }
  }

  const filterAssistentsTecnicalsForPostalCode = async (listTecnicals) => {
    const cep = filtersPrimaryFormPreview.filterPrimaryCep.filterLabel.replace(
      '-',
      ''
    )

    const ufUser = await searchPostalCodeForCep(cep)

    const listTecnicalCurrency = listTecnicals.filter((assistentTecnical) => {
      return assistentTecnical.ESTADO === ufUser.uf
    })
    setListAssistentsTecnicalsFiltred(listTecnicalCurrency)
  }

  const setAssitentTecnical = (listTecnicals) => {
    let options = { units: MAP_CONSTANTS.UNITS_DISTANCE }
    const CepCoords = require('coordenadas-do-cep')

    CepCoords.getByCep(filtersPrimaryFormPreview.filterPrimaryCep.filterLabel)
      .then((info) => {
        const coordenateUser = point([info.lon, info.lat])
        //retorna o mesmo 'info' da versão em promise
        let listAT = listTecnicals.map((tecnical) => {
          const coordenateTecnical = point([
            tecnical.LONGITUDE,
            tecnical.LATITUDE
          ])
          let previewTecnical = {
            ...tecnical,
            distance: distance(coordenateUser, coordenateTecnical, options)
          }
          return previewTecnical
        })
        filterAssistentsTecnicalsForPostalCode(listAT)
      })
      .catch((err) => {
        //retorna o mesmo parâmetro 'err' da versão em promise
        let infoModal = {
          title: 'CEP Inválido',
          body: '<p>Não foi possível encontrar seu CEP, tente novamente mais tarde.</p>',
          type: 'error'
        }
        ctxGlobal.setInformationsModal(infoModal)
        ctxGlobal.toggleModalContainer('alert')
      })
  }

  useEffect(() => {
    if (filtersPrimaryFormPreview.filterPrimaryCep.filterLabel !== '') {
      setAssitentTecnical(listAssistentsTecnicals)
    }
    loadingAssistensTecnicalsFiltred()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFilterCurrency, listAssistentsTecnicals])

  useEffect(async() => {

    var list = await fetch(`${serverPath}/api/orders/${orderId}`, {method: 'GET',headers: new Headers()});
    list = await list.json()
    //Aqui entra a api da tray para verificar o pedido

    setOrder(list)

  }, [])

  const loadingAssistensTecnicals = async () => {
    //Lista de assistencias tecnicas pela api
    var list = await fetch(`${serverPath}/api/tecnical`, {method: 'GET',headers: new Headers()});
    list.json().then((data) => {

      setListAssistentsTecnicals(data)})

    //const listAssistentsTecnicalsFetch = TECNICALS_API
    //Aqui sera feito dentro do fetch apos filtrar as listas de assistentes
    // no lugar do listAssistents sera o data de retorno

  }

  //Setar a assistência técnica selecionada
  const setTecnicalSelect = (id) => {
    let tecnicalSelect = assistentsTecnicaslSelected === id ? 0 : id
    setAssistentsTecnicaslSelected(tecnicalSelect)
  }

  //Filtro de distâncias
  const filterDistante = (listTecnicals,filtersCurrency) => {
    let filterState = filtersCurrency

    let newListTecnicals = listTecnicals.filter((item) => {            
            switch (filterState) {
              case '20km':
                return item.distance <= 20
              case '50km':
                return item.distance <= 50
              case 'more50km':
                return item.distance > 50
              default:
                return item
            }
          })
  
    return newListTecnicals
  }

  const getDistancia = (listTecnicals,cep,filterState) =>{
    let options = { units: MAP_CONSTANTS.UNITS_DISTANCE }
    const CepCoords = require('coordenadas-do-cep')
    return CepCoords.getByCep(cep)
      .then((info) => {
        const coordenateUser = point([info.lon, info.lat])
        //retorna o mesmo 'info' da versão em promise
        let listAT = listTecnicals.filter((tecnical) => {
          const coordenateTecnical = point([
            tecnical.LONGITUDE,
            tecnical.LATITUDE
          ])
          let previewTecnical = {
            ...tecnical,
            distance: distance(coordenateUser, coordenateTecnical, options)
          }
          if(filterState == '20km'){
            if(previewTecnical.distance <= 20){
              return previewTecnical
            }
          }
          if(filterState == '50km'){
            if(previewTecnical.distance <= 50){
              return previewTecnical
            }
          }if(filterState == 'Acima de 50km'){
            return previewTecnical
          }          
        })
        setListAssistentsTecnicals(listAT)     
        }).catch((err) => {
          //retorna o mesmo parâmetro 'err' da versão em promise
          let infoModal = {
            title: 'CEP Inválido',
            body: '<p>Não foi possível encontrar seu CEP, tente novamente mais tarde.</p>',
            type: 'error'
          }
          ctxGlobal.setInformationsModal(infoModal)
          ctxGlobal.toggleModalContainer('alert')
        })
      }

  //Filtrando a cidade
  const filterCity = (listTecnicals,filtersCurrency) => {
    let filterState = filtersCurrency
    let newListTecnicals =
         listTecnicals.filter((item) => {
            return item.MUNICIPIO === filterState
          })
          
    return newListTecnicals
  }

  //Filtrando o estado
  const filterState = (listTecnicals,filtersCurrency) => {    
    let filterState = filtersCurrency
    
    let newListTecnicals = listTecnicals.filter((item) => {
            return item.ESTADO === filterState
          })
    return newListTecnicals
  }

  //Realiza a verficação de filtros para listar
  const loadingAssistensTecnicalsFiltred = () => {
    let listTecnicalsFiltred =
      listAssistentsTecnicals.length > 0 ? listAssistentsTecnicals : []

    setListAssistentsTecnicalsFiltred(listTecnicalsFiltred)
  }

  //Removendo Filtro
  const findFilterDelete = (targetLabel) => {
    let newListFiltersCurrency =
      isFilterCurrency.length > 0 &&
      isFilterCurrency.filter((filter) => {
        return filter.filterLabel !== targetLabel
      })

    return newListFiltersCurrency
  }

  //Excluir filtro pela posição
  const findExcludeFilterPosition = (type) => {
    let validateFilter =
      isFilterCurrency.length > 0
        ? isFilterCurrency.filter((filter) => {
            return filter.type !== type
          })
        : []

    return validateFilter
  }

  //Mudança do filtro das assistências técnicas
  const changeTecnicalsSelect = (event) => {
    //loadingAssistensTecnicals()
    //setListAssistentsTecnicals(TECNICALS_API)

    try{
    let valueButton = event.target.attributes['data-ref'].value
    let TecnicalFilterSelect =
      filterTecnicalsSelected !== valueButton ? valueButton : ''
    setFilterTecnicalsSelected(valueButton)

    if (TecnicalFilterSelect === '') {
      setIsFilterCurrency(
        findFilterDelete(event.target.attributes['data-ref-show'].value)
      )
    } else {
      let arrValidateTecnicalsFilter = findExcludeFilterPosition(
        MAP_CONSTANTS.MAP_FILTER_TECNICALS
      )

      let newFilterTecnical = {
        uuid: uuidv4(),
        type: MAP_CONSTANTS.MAP_FILTER_TECNICALS,
        filterLabel: event.target.attributes['data-ref-show'].value,
        filterValue: event.target.attributes['data-ref-filter'].value
      }

      arrValidateTecnicalsFilter.push(newFilterTecnical)
      setIsFilterCurrency(arrValidateTecnicalsFilter)
    }
    //unsetFilterPrimary()

  }catch(error){

  }
  }

  //Limpando o filtro especifico
  const clearFilterSpecify = (fields) => {
    const filtersPrimaryObj = {}

    fields.forEach((field) => {
      filtersPrimaryObj[field] = FILTER_INIT
    })

    setFiltersPrimaryFormPreview({
      ...filtersPrimaryFormPreview,
      ...filtersPrimaryObj
    })
    setFilterDistanceSelected('')
  }

  //Setando os filtros prévios
  const setFilterPrimaryPreview = useDebouncedCallback(
    (data, field, type, filtered = '') => {
      let valuesFilterPrimary = {
        label: '',
        value: ''
      }

      if (type === MAP_CONSTANTS.MAP_FILTER_DISTANCE) {
        let validateChangeDistanceFilter =
          data.target.attributes['data-ref'].value === filterDistanceSelected
            ? ''
            : data.target.attributes['data-ref'].value

        valuesFilterPrimary.label =
          validateChangeDistanceFilter !== ''
            ? data.target.attributes['data-ref-show'].value
            : ''

        valuesFilterPrimary.value =
          validateChangeDistanceFilter !== ''
            ? data.target.attributes['data-ref-filter'].value
            : ''

        setFilterDistanceSelected(validateChangeDistanceFilter)
      } else {
        valuesFilterPrimary.label =
          data.target.value !== '' ? data.target.value : ''
        valuesFilterPrimary.value = filtered !== '' ? filtered : ''
      }

      setFiltersPrimaryFormPreview({
        ...filtersPrimaryFormPreview,
        [field]: {
          uuid: uuidv4(),
          type: type,
          filterLabel: valuesFilterPrimary.label,
          filterValue: valuesFilterPrimary.value
        }
      })
    },
    200
  )

  //Remove um dos filtros atuais
  const removeFilterCurrency = (uuid, type) => {
    let newArray = isFilterCurrency.filter((filter) => {
      return filter.uuid !== uuid
    })

    type === MAP_CONSTANTS.MAP_FILTER_DISTANCE && setFilterDistanceSelected('')
    type === MAP_CONSTANTS.MAP_FILTER_TECNICALS &&
      setFilterTecnicalsSelected('')

    setIsFilterCurrency(newArray)
  }

  //Reseta os filtros preview
  const unsetFilterPrimary = () => {
    const filterPreviewNotCity = {}

    Object.keys(FILTERS_PREVIEW_INIT).forEach((filter) => {
      if (filter !== 'filterPrimaryState')
        filterPreviewNotCity[filter] = FILTERS_PREVIEW_INIT[filter]
    })
    setFiltersPrimaryFormPreview({
      ...filtersPrimaryFormPreview,
      ...filterPreviewNotCity
    })
  }

  //Filtra os novos filtros com base no preview
  const setFiltersPrimary = async () => {
    let filterCurrencyOnlyTecnical = isFilterCurrency.filter((filter) => {
      if (
        filter.type !== MAP_CONSTANTS.MAP_FILTER_CEP &&
        filter.type !== MAP_CONSTANTS.MAP_FILTER_CITY &&
        filter.type !== MAP_CONSTANTS.MAP_FILTER_UF &&
        filter.type !== MAP_CONSTANTS.MAP_FILTER_DISTANCE
      ) {
        return filter
      }
    })

    let filtersPrimary = []

    Object.keys(filtersPrimaryFormPreview).forEach((filter) => {
      let objectSelected = filtersPrimaryFormPreview[filter]

      if (objectSelected.filterLabel !== '') {
        filtersPrimary.push(objectSelected)
      }
    })

    filtersPrimary.forEach((filterPrimary) => {
      filterCurrencyOnlyTecnical.push(filterPrimary)
    })

    const postalCode = filtersPrimary.filter((filter) => {
      if (filter.type === MAP_CONSTANTS.MAP_FILTER_CEP) {
        return filter
      }
    })

    if (postalCode.length > 0) {
      const dataPostalCode = await searchPostalCodeForCep(
        postalCode[0].filterLabel.replace('-', '')
      )
      filterCurrencyOnlyTecnical.push({
        uuid: uuidv4(),
        type: MAP_CONSTANTS.MAP_FILTER_UF,
        filterLabel: dataPostalCode.uf,
        filterValue: dataPostalCode.uf
      })
    }
    setIsFilterCurrency(filterCurrencyOnlyTecnical)
    setTimeout(() => {
      unsetFilterPrimary()
    }, 200)
  }

  const changeScheduling = (key, option) => {
    setScheduling({
      ...scheduling,
      [key]: option.target.value,
      schedulinglabel: option.target[option.target.selectedIndex].innerText
    })
  }

  const changeSchedulingDate = (key, option) => {
    setScheduling({
      period: '',
      dateScheduling: option,
      schedulinglabel: ''
    })
  }

const resetScheduling = () => {
    let initialScheduling = {
      period: '',
      dateScheduling: '',
      schedulinglabel: ''
    }

    setScheduling(initialScheduling)
  }

  const validateAndSendScheduling = () => {
    if (scheduling.period === ''.trim()) {
      return {
        message: '',
        status: 400
      }
    }

    return {
      message: 'Agendamento concluído',
      status: 200
    }
  }

  const setFilter = () => {
    if (isFilterOpen === MAP_CONSTANTS.MAP_FILTER_TECNICALS) {
      setIsFilterOpen(MAP_CONSTANTS.MAP_FILTER)
    } else {
      setIsFilterOpen(MAP_CONSTANTS.MAP_FILTER_TECNICALS)
    }
  }
  const clearFilters = async () => {
    var list = await fetch(`${serverPath}/api/tecnical`, {method: 'GET',headers: new Headers()});
    list.json().then((data) => {
      setListAssistentsTecnicals(data)})
      setFiltersPrimaryFormPreview(FILTERS_PREVIEW_INIT)
      setIsFilterCurrency([])      
  }
  const setFiltersShowInMobile = () => {
    setIsOpenFiltersMobile(!isOpenFiltersMobile)
  }

  const openDialogConfirmed = () => {
    resetScheduling()
  }

  const setShowFilterSelector = (type) => {
    const validateTypes = ['choosing', 'postalCode', 'locatorUF']

    if (validateTypes.indexOf(type) > -1) {
      setIsShowFilter(type)
    }
  }
  const getTechnicals = async (filter) => {
    var list = await fetch(`${serverPath}/api/tecnical`, {method: 'GET',headers: new Headers()});
    list.json().then((data) => {  
      if(filter.cep){      
       getDistancia(data,filter.cep,filter.distance).then((dist) => {
       })       
      
      }else{
        if(filter.city){
          setListAssistentsTecnicals(filterCity(data,filter.city))
        }else{
          setListAssistentsTecnicals(filterState(data,filter.state))
        }
      }
    })    
  }
  const stateMap = {
    filtersAndTecnicals: {
      isFilterOpen,
      isFilterCurrency,
      filterTecnicalsSelected,
      filterDistanceSelected,
      listAssistentsTecnicalsFiltred,
      listAssistentsTecnicals,
      setFilterPrimaryPreview,
      filtersPrimaryFormPreview,
      isOpenFiltersMobile,
      assistentsTecnicaslSelected,
      order,
      scheduling,
      clearFilterSpecify,
      setTecnicalSelect,
      loadingAssistensTecnicals,
      setListAssistentsTecnicals,
      removeFilterCurrency,
      setFilter,
      changeTecnicalsSelect,
      setFiltersPrimary,
      setFiltersShowInMobile,
      openDialogConfirmed,
      changeScheduling,
      validateAndSendScheduling,
      changeSchedulingDate,
      resetScheduling,
      getTechnicals,
      clearFilters
    },
    filter: {
      isShowFilter,
      setShowFilterSelector
    }
  }
  return (
    <MapContext.Provider value={stateMap}>
      <ModalAlert />
      {children}
    </MapContext.Provider>
  )
}

export default MapContextProvider
