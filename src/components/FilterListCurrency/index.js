import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { MapContext } from 'contexts/mapContext'
import FilterCurrency from './FilterCurrency'
import * as Styles from './styles'

const FilterListCurrency = () => {
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  return (
    <Styles.FiltersWrapper>
      <Styles.FilterCurrencyButton>
        <Styles.ButtonMenuInside
          type="button"
          aria-label="Menu mobile em formato de Hamburguer"
          onClick={() => FiltersContext.setFiltersShowInMobile()}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </Styles.ButtonMenuInside>
      </Styles.FilterCurrencyButton>
      {FiltersContext.isFilterCurrency.length > 0 &&
        FiltersContext.isFilterCurrency.map((filter) => {
          if (filter.uuid != '') {
            return <FilterCurrency key={filter.uuid} filter={filter} />
          }
        })}
    </Styles.FiltersWrapper>
  )
}

export default FilterListCurrency
