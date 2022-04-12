import { useContext, useEffect } from 'react'
import RecurringScheduleTecnical from 'components/RecurringScheduleTecnical'
import { SchedulingContext } from 'contexts/schedulingContext'
import Button from 'components/Button'

const ScheduleTechnicalContainer = () => {
  const ctxScheduling = useContext(SchedulingContext)

  useEffect(() => {
    ctxScheduling.initScheduling(ctxScheduling.calendar)
  })
  return (
    <>
      {ctxScheduling.scheduling.length > 0 &&
        ctxScheduling.scheduling.map((schedule, index) => {
          console.log(schedule)
          return (
            <RecurringScheduleTecnical
              scheduling={schedule}
              key={schedule.id}
              indexDay={index}
            />
          )
        })}
      <Button
        type="button"
        text="Salvar"
        onClick={() => ctxScheduling.saveSchedulingEditions(ctxScheduling.calendar)}
      />
    </>
  )
}

export default ScheduleTechnicalContainer
