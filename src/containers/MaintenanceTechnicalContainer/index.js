import { useContext } from 'react'
import { schedulingMaintenceContext } from 'contexts/schedulingMaintenceContext'
import MaintenanceTechnical from 'components/MaintenanceTechnical'
import FilterMaintenance from 'components/FilterMaintenance'
import Button from 'components/Button'

const MaintenanceTechnicalContainer = () => {
  const ctxSchedulingMaintence = useContext(schedulingMaintenceContext)
  return (
    <>
      <FilterMaintenance />
      <MaintenanceTechnical />
      <Button
        type="button"
        text="Salvar"
        onClick={() =>
          ctxSchedulingMaintence.saveMaintenanceSchedulingEditions()
        }
      />
    </>
  )
}

export default MaintenanceTechnicalContainer
