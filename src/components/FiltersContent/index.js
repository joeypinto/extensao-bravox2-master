import { useContext } from 'react'
import { MapContext } from 'contexts/mapContext'
import Filters from 'components/Filters'
import TecnicalAssistentList from 'components/TecnicalAssistentList'
import * as Styles from './styles'

const FiltersContent = () => {
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  return (
    <Styles.FiltersWrapper
      className={FiltersContext.isOpenFiltersMobile && 'is__open'}
    >
      <Styles.FiltersWrapperTitle>Filtro</Styles.FiltersWrapperTitle>

      <Styles.FilterWrapperContent role="contentinfo">
        <TecnicalAssistentList />
        <Filters />
      </Styles.FilterWrapperContent>
    </Styles.FiltersWrapper>
  )
}

export default FiltersContent
