import { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { MapContext } from 'contexts/mapContext'
import TecnicalAssistentItem from './TecnicalAssistentItem'
import TecnicalMessage from './TecnicalMessage'
import { MAP_CONSTANTS } from 'constants/map'
import * as Styles from './styles'

const TecnicalAssistentList = () => {
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals
  useEffect(() => {
    FiltersContext.loadingAssistensTecnicals()
  }, [])

  const formatedData = (date) => {
    return String(date).replace(/-/gi, '/')
  }

  const sortTecnicals = (tecnicalList) => {
    let newTecnicalList = tecnicalList.sort((a, b) => {
      if (a.distance > b.distance) {
        return 1
      }

      if (a.distance < b.distance) {
        return -1
      }

      return 0
    })

    return newTecnicalList
  }
  const sortTecnicaslForDate = (tecnicalList) => {
    return tecnicalList.sort((a, b) => {
      return (
        new Date(formatedData(a.closestDate)) <
        new Date(formatedData(b.closestDate))
      )
    })
  }

  const validateClosestFasterFilter = (listFilters, target) => {
    return listFilters.length < 0
      ? []
      : listFilters.filter((filter) => {
          if (
            filter.type === MAP_CONSTANTS.MAP_FILTER_TECNICALS &&
            filter.filterValue === target
          ) {
            return filter
          }
        })
  }

  const searchFilterCEP = (filters) => {
    let isValid = false

    if (filters.length === 0) {
      return false
    }
    filters.forEach((filter) => {
      if (filter.type === MAP_CONSTANTS.MAP_FILTER_CEP) isValid = true
    })

    return isValid
  }

  const listTecnicalValidate = (tecnicals) => {
    return tecnicals.filter((tecnical) => {
      return tecnical.LATITUDE != 0 && tecnical.LONGITUDE != 0
    })
  }

  return (
    <Styles.TecnicalWrapper
      className={
        FiltersContext.isFilterOpen === MAP_CONSTANTS.MAP_FILTER_TECNICALS &&
        'is__visible'
      }
    >
      <Styles.HeaderTecnical>
        <Styles.HeaderTecnicalList>
          <Styles.HeaderTecnicalItem>
            {/* {FiltersContext.isFilterCurrency.length > 0 &&
              searchFilterCEP(FiltersContext.isFilterCurrency) && (
                <Styles.ButtonFilterTecnical
                  className={`${
                    FiltersContext.filterTecnicalsSelected === 'closer' &&
                    'is__selected'
                  } ${
                    FiltersContext.listAssistentsTecnicals.length <= 0 &&
                    'is__invisible'
                  }`}
                  data-ref="closer"
                  data-ref-show="Mais Próximo"
                  data-ref-filter="closer"
                  onClick={(e) => FiltersContext.changeTecnicalsSelect(e)}
                >
                  Mais próximas
                </Styles.ButtonFilterTecnical>
              )} */}

            {/* <Styles.ButtonFilterTecnical
              className={`${
                FiltersContext.filterTecnicalsSelected === 'faster' &&
                'is__selected'
              } ${
                FiltersContext.listAssistentsTecnicals.length <= 0 &&
                'is__invisible'
              }`}
              data-ref="faster"
              data-ref-show="Mais Rápido"
              data-ref-filter="faster"
              onClick={(e) => FiltersContext.changeTecnicalsSelect(e)}
            >
              Mais Rápido
            </Styles.ButtonFilterTecnical> */}
          </Styles.HeaderTecnicalItem>
          <Styles.HeaderTecnicalItem>
            <Styles.ButtonFilterChange
              onClick={() => FiltersContext.setFilter()}
            >
              <FontAwesomeIcon icon={faFilter} />
              Filtro
            </Styles.ButtonFilterChange>
          </Styles.HeaderTecnicalItem>
        </Styles.HeaderTecnicalList>
      </Styles.HeaderTecnical>

      <Styles.ListTecnicals>
        {FiltersContext.listAssistentsTecnicalsFiltred.length > 0 &&
        validateClosestFasterFilter(FiltersContext.isFilterCurrency, 'faster')
          .length > 0 ? (
          sortTecnicaslForDate(
            listTecnicalValidate(FiltersContext.listAssistentsTecnicalsFiltred)
          ).map((assistent) => {
            return (
              <TecnicalAssistentItem key={assistent.ID} assistent={assistent} />
            )
          })
        ) : searchFilterCEP(FiltersContext.isFilterCurrency).length > 0 &&
          FiltersContext.listAssistentsTecnicalsFiltred.length > 0 &&
          validateClosestFasterFilter(FiltersContext.isFilterCurrency, 'closer')
            .length > 0 ? (
          sortTecnicals(
            listTecnicalValidate(FiltersContext.listAssistentsTecnicalsFiltred)
          ).map((assistent) => {
            return (
              <TecnicalAssistentItem key={assistent.ID} assistent={assistent} />
            )
          })
        ) : listTecnicalValidate(FiltersContext.listAssistentsTecnicalsFiltred)
            .length > 0 ? (
          listTecnicalValidate(
            FiltersContext.listAssistentsTecnicalsFiltred
          ).map((assistent) => {
            return (
              <TecnicalAssistentItem key={assistent.ID} assistent={assistent} />
            )
          })
        ) : listTecnicalValidate(FiltersContext.listAssistentsTecnicals)
            .length > 0 ? (
          listTecnicalValidate(FiltersContext.listAssistentsTecnicals).map(
            (assistent) => {
              return (
                <TecnicalAssistentItem
                  key={assistent.ID}
                  assistent={assistent}
                />
              )
            }
          )
        ) : (
          <TecnicalMessage title={'Assistências Técnicas Autorizadas'}>
            <p>
              Não encontrado nenhuma assistência técnica no momento.
              <br />
              {FiltersContext.filtersPrimaryFormPreview.filterPrimaryCep
                .filterValue !== '' &&
                'Por favor, tente com um CEP diferente para a instalação.'}
            </p>
          </TecnicalMessage>
        )}
      </Styles.ListTecnicals>
    </Styles.TecnicalWrapper>
  )
}

export default TecnicalAssistentList
