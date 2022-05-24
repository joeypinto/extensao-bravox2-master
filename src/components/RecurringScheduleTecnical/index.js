import { useContext } from 'react'
import * as Styles from './style'
import { SchedulingContext } from 'contexts/schedulingContext'
import {
  LEGENDS_WEEK
} from 'constants/sheduling'
const RecurringScheduleTecnical = ({ scheduling, ...props }) => {
  const ctxScheduling = useContext(SchedulingContext)
  //const week = LEGENDS_WEEK.filter(el => el.classLegend === scheduling.dayWeek)[0].legend
  console.log(scheduling)
  return (
    <Styles.ScheduleWrapper action="#">
      <Styles.ScheduleTitleDay>      
        {scheduling.dayWeek === '' || scheduling.dayWeek === null
          ? 'Informações indisponíveis'
          : scheduling.dayWeek}
      </Styles.ScheduleTitleDay>
      <Styles.ScheduleContentWrapper>
        {scheduling.scheduledPeriods.length > 0 &&
          scheduling.scheduledPeriods.map((schedule, index) => {            
            return (
              <Styles.ScheduleContentInputWrapper
                key={`day#${props.indexDay}-${schedule.id}`}
              >
                <Styles.ScheduleLabel>{schedule.period}</Styles.ScheduleLabel>
                <Styles.ScheduleInput
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={schedule.amount}
                  data-period={index}
                  data-day={props.indexDay}
                  onChange={(e) => ctxScheduling.changeScheduling(e)}
                />
              </Styles.ScheduleContentInputWrapper>
            )
          })}
      </Styles.ScheduleContentWrapper>
    </Styles.ScheduleWrapper>
  )
}

export default RecurringScheduleTecnical
