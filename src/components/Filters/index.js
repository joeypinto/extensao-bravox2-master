import { useContext, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { MapContext } from 'contexts/mapContext'
import { GlobalContext } from 'contexts/globalContext'
import { MAP_CONSTANTS } from 'constants/map'
import * as Styles from './styles'
import { serverPath } from './../../utils/index';

const Filters = () => {
  const [distanceFilterVisible, setDistanceFilterVisible] = useState(false)
  const [distanceNotify, setDistanceNotify] = useState(false)
  const [mask, setMask] = useState("")
  const [select, setSelect] = useState("")
  const context = useContext(MapContext)
  const globalCtx = useContext(GlobalContext)
  const FiltersContext = context.filtersAndTecnicals
 

  const filtredStates = (states) => {
    if (states.length === 0) {
      return ''
    }

    const temporaryState = []

    states.forEach((state) => {
      if (temporaryState.indexOf(state.ESTADO) === -1) {
        temporaryState.push(state.ESTADO)
      }
    })

    return temporaryState.map((state, index) => {
      return (
        <option key={index} value={state}>
          {state}
        </option>
      )
    })
  }

  const filterCityForState = (cities) => {
    if (cities.length === 0) {
      return ''
    }

    const temporaryCities = []

    const temporaryCitiesFiltred = cities.filter((city) => {
      return (
        city.ESTADO ===
        FiltersContext.filtersPrimaryFormPreview.filterPrimaryState.filterLabel
      )
    })

    temporaryCitiesFiltred.forEach((state) => {
      if (temporaryCities.indexOf(state.MUNICIPIO) === -1) {
        temporaryCities.push(state.MUNICIPIO)
      }
    })

    return temporaryCities.map((city, index) => {
      return (
        <option key={`city-${index}`} value={city}>
          {city}
        </option>
      )
    })
  }

  const handleSetFiltersPrimary = async () => {
    const filtersCurrency = FiltersContext.filtersPrimaryFormPreview
    if (
      filtersCurrency.filterPrimaryCep.filterValue === '' &&
      filtersCurrency.filterPrimaryState.filterValue === '' &&
      filtersCurrency.filterPrimaryCity.filterValue === '' &&
      filtersCurrency.filterPrimaryDistance.filterValue === ''
    ) {
      globalCtx.setInformationsModal({
        title: 'Nenhum filtro selecionado',
        body: '<p>Ops, para filtrar selecione pelo menos um filtro para ser aplicado.</p>',
        type: 'error'
      })
      globalCtx.toggleModalContainer('alert')
    } else {
      if (
        filtersCurrency.filterPrimaryCep.filterValue !== '' &&
        filtersCurrency.filterPrimaryDistance.filterValue === ''
      ) {
        globalCtx.setInformationsModal({
          title: 'Distância não Selecionada',
          body: '<p>Por favor, selecione um filtro de "Em Até" desejado, para calcular a distância entre seu CEP e as Assistências Autorizadas.</p>',
          type: 'warning'
        })
        globalCtx.toggleModalContainer('alert')
        setDistanceNotify(true)
      } else {
        let filter = {cep:filtersCurrency.filterPrimaryCep.filterLabel,
        distance:filtersCurrency.filterPrimaryDistance.filterLabel,
        state : filtersCurrency.filterPrimaryState.filterLabel,
        city : filtersCurrency.filterPrimaryCity.filterLabel}
      
      FiltersContext.getTechnicals(filter)
      FiltersContext.setFilter()     
      FiltersContext.setFiltersPrimary()
      setDistanceNotify(false)
      setMask("")
      setSelect("")
      setDistanceFilterVisible(false)
      }
    }
    
  }

  useEffect(() => {

    let distance =
      FiltersContext.filtersPrimaryFormPreview.filterPrimaryDistance.filterValue
    if (distance !== '') {
      setDistanceNotify(false)
    }
  }, [
    FiltersContext.filtersPrimaryFormPreview.filterPrimaryDistance.filterValue

  ])
  return (
    <Styles.FiltersPrimaryWrapper
      className={
        FiltersContext.isFilterOpen === MAP_CONSTANTS.MAP_FILTER &&
        'is__visible'
      }
    >
      <Styles.FiltersHeader>
        <button
          type="button"
          aria-label="Botão de Fechar"
          onClick={() => FiltersContext.setFilter()}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </Styles.FiltersHeader>
      <Styles.FilterWrapperContent>
        <Styles.FilterWrapperForm>
          {(context.filter.isShowFilter === 'postalCode' ||
            context.filter.isShowFilter === 'choosing') && (
            <Styles.FilterWrapperFields>
              <Styles.FilterLabel htmlFor="txt_cep">Cep</Styles.FilterLabel>
              <InputMask  
                value={mask}            
                mask="99999-999"
                onChange={(e) => {                  
                  setMask(e.target.value)    
                  let cepFormated = e.target.value
                    .replace(/-/g, '')
                    .replace(/_/g, '')
                  if (cepFormated === '' || cepFormated.length < 8) {
                    setDistanceFilterVisible(false)
                    FiltersContext.clearFilterSpecify([
                      'filterPrimaryCep',
                      'filterPrimaryDistance'
                    ])
                    context.filter.setShowFilterSelector('choosing')
                  } else {
                    setDistanceFilterVisible(true)
                    FiltersContext.setFilterPrimaryPreview(
                      e,
                      'filterPrimaryCep',
                      MAP_CONSTANTS.MAP_FILTER_CEP,
                      'cepFiltered'
                    )
                    context.filter.setShowFilterSelector('postalCode')
                  }
                }}
              >
                {(inputProps) => (                  
                  <Styles.FilterInput
                    {...inputProps}
                    type="text"
                    id="txt_cep"
                    placeholder="Digite seu Cep"
                  />
                )}
              </InputMask>
            </Styles.FilterWrapperFields>
          )}
          {context.filter.isShowFilter === 'choosing' && (
            <Styles.DivisorWrapper>Ou</Styles.DivisorWrapper>
          )}

          {(context.filter.isShowFilter === 'locatorUF' ||
            context.filter.isShowFilter === 'choosing') && (
            <Styles.FilterWrapperFields>
              <Styles.FilterLabel htmlFor="select_uf">UF</Styles.FilterLabel>
              <Styles.FilterSelect
                id="select_uf"
                onChange={(e) => {
                  FiltersContext.setFilterPrimaryPreview(
                    e,
                    'filterPrimaryState',
                    MAP_CONSTANTS.MAP_FILTER_UF,
                    'statFiltered'
                  )
                  if (e.target.value !== '') {
                    context.filter.setShowFilterSelector('locatorUF')
                  } else {
                    context.filter.setShowFilterSelector('choosing')
                  }
                }}
              >
                <option value={select}>Escolha um estado</option>
                {FiltersContext.listAssistentsTecnicalsFiltred.length > 0 &&
                  filtredStates(FiltersContext.listAssistentsTecnicalsFiltred)}

                {FiltersContext.listAssistentsTecnicalsFiltred.length === 0 &&
                  FiltersContext.listAssistentsTecnicals.length > 0 &&
                  filtredStates(FiltersContext.listAssistentsTecnicals)}
              </Styles.FilterSelect>
            </Styles.FilterWrapperFields>
          )}

          {FiltersContext.filtersPrimaryFormPreview.filterPrimaryState
            .filterLabel !== '' && (
            <Styles.FilterWrapperFields>
              <Styles.FilterLabel htmlFor="select_city">
                Cidade
              </Styles.FilterLabel>
              <Styles.FilterSelect
                id="select_city"
                onChange={(e) =>
                  FiltersContext.setFilterPrimaryPreview(
                    e,
                    'filterPrimaryCity',
                    MAP_CONSTANTS.MAP_FILTER_CITY,
                    'cityFiltered'
                  )
                }
              >
                <option value="">Escolha uma cidade </option>

                {FiltersContext.listAssistentsTecnicalsFiltred.length > 0 &&
                  filterCityForState(
                    FiltersContext.listAssistentsTecnicalsFiltred
                  )}
                {FiltersContext.listAssistentsTecnicalsFiltred.length === 0 &&
                  FiltersContext.listAssistentsTecnicals.length > 0 &&
                  filterCityForState(FiltersContext.listAssistentsTecnicals)}
              </Styles.FilterSelect>
            </Styles.FilterWrapperFields>
          )}

          {distanceFilterVisible && (
            <Styles.FilterWrapperFields>
              <Styles.FilterLabel className={distanceNotify && 'is__error'}>
                Em até:
              </Styles.FilterLabel>
              <Styles.FilterListDistance>
                <li>
                  <Styles.FilterButtonForm
                    data-ref="20"
                    data-ref-show="20km"
                    data-ref-filter="20km"
                    type="button"
                    className={`is__rounded ${
                      FiltersContext.filterDistanceSelected === '20' &&
                      'is__active'
                    }`}
                    onClick={(e) =>
                      FiltersContext.setFilterPrimaryPreview(
                        e,
                        'filterPrimaryDistance',
                        MAP_CONSTANTS.MAP_FILTER_DISTANCE
                      )
                    }
                  >
                    20km
                  </Styles.FilterButtonForm>
                </li>
                <li>
                  <Styles.FilterButtonForm
                    data-ref="50"
                    data-ref-show="50km"
                    data-ref-filter="50km"
                    type="button"
                    className={`is__rounded ${
                      FiltersContext.filterDistanceSelected === '50' &&
                      'is__active'
                    }`}
                    onClick={(e) =>
                      FiltersContext.setFilterPrimaryPreview(
                        e,
                        'filterPrimaryDistance',
                        MAP_CONSTANTS.MAP_FILTER_DISTANCE
                      )
                    }
                  >
                    50km
                  </Styles.FilterButtonForm>
                </li>
                <li>
                  <Styles.FilterButtonForm
                    data-ref="+50km"
                    data-ref-show="Acima de 50km"
                    data-ref-filter="more50km"
                    type="button"
                    className={
                      FiltersContext.filterDistanceSelected === '+50km' &&
                      'is__active'
                    }
                    onClick={(e) =>
                      FiltersContext.setFilterPrimaryPreview(
                        e,
                        'filterPrimaryDistance',
                        MAP_CONSTANTS.MAP_FILTER_DISTANCE
                      )
                    }
                  >
                    Acima de 50km
                  </Styles.FilterButtonForm>
                </li>
              </Styles.FilterListDistance>
            </Styles.FilterWrapperFields>
          )}
        </Styles.FilterWrapperForm>

        <Styles.FilterButtonSubmit
          type="button"
          onClick={() => handleSetFiltersPrimary()}
        >
          Filtrar
        </Styles.FilterButtonSubmit>
      </Styles.FilterWrapperContent>
    </Styles.FiltersPrimaryWrapper>
  )
}

export default Filters
