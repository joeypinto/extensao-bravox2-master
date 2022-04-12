import { useCallback, useContext, useEffect } from 'react'
import { MapContext } from 'contexts/mapContext'
import { GlobalContext } from 'contexts/globalContext'
import DialogScheduling from './DialogScheduling'
import ModalContainer from 'containers/ModalContainer'

const ModalScheduling = () => {
  const ctxGlobal = useContext(GlobalContext)
  const context = useContext(MapContext)
  const FiltersContext = context.filtersAndTecnicals

  const tecnicalSelected = FiltersContext.listAssistentsTecnicals.filter(
    (tecnical) => {
      return tecnical.ID === FiltersContext.assistentsTecnicaslSelected
    }
  )

  const escModal = useCallback(() => {
    FiltersContext.openDialogConfirmed()
  }, [])

  return (
    <ModalContainer isOpen={ctxGlobal.isToggleModal === 'tecnical' && true}>
      {tecnicalSelected.map((tecnical) => {
        return <DialogScheduling key={tecnical.ID} tecnicalData={tecnical} />
      })}
    </ModalContainer>
  )
}

export default ModalScheduling
