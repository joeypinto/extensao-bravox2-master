import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'
import { WEEK_LIST } from 'constants/sheduling'
import { useContext } from 'react'
import { schedulingMaintenceContext } from 'contexts/schedulingMaintenceContext'

const FilterMaintenance = () => {
  const ctxSchedulingMaintence = useContext(schedulingMaintenceContext)

  return (
    <Styles.FilterMaintenanceWrapper>
      <Styles.FilterMaintenanceLabel>
        Filtrar por semana <FontAwesomeIcon icon={faCalendarWeek} size="1x" />
      </Styles.FilterMaintenanceLabel>
      <Styles.FilterMaintenanceSelect
        onChange={(e) => {
          ctxSchedulingMaintence.setWeek(parseInt(e.target.value))
        }}
      >
        {WEEK_LIST.map((week) => {
          return (
            <option key={`week-${week.id}`} value={week.value}>
              {week.label}
            </option>
          )
        })}
      </Styles.FilterMaintenanceSelect>
    </Styles.FilterMaintenanceWrapper>
  )
}

export default FilterMaintenance
