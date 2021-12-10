import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { MapContext } from 'contexts/mapContext'
import * as Styles from './styles'

const FilterCurrency = ({ filter }) => {
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  return (
    <Styles.FilterCurrencyItem>
      <Styles.FilterCurrencyButton
        onClick={() =>
          FiltersContext.removeFilterCurrency(filter.uuid, filter.type)
        }
      >
        {filter.filterLabel}
        <FontAwesomeIcon icon={faTimes} />
      </Styles.FilterCurrencyButton>
    </Styles.FilterCurrencyItem>
  )
}

export default FilterCurrency
