import { useContext } from 'react'
import * as Styles from './style'
import { SchedulingContext } from 'contexts/schedulingContext'

const RecurringScheduleTecnical = ({ scheduling, ...props }) => {
  const ctxScheduling = useContext(SchedulingContext)

  return (
    <Styles.ScheduleWrapper action="#">
      <Styles.ScheduleTitleDay>
        {scheduling.weekDay === '' || scheduling.weekDay === null
          ? 'Informações indisponíveis'
          : scheduling.weekDay}
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
