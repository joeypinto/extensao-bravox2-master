import { useContext } from 'react'
import { schedulingMaintenceContext } from 'contexts/schedulingMaintenceContext'
import * as Styles from './style'

const MaintenanceTechnical = () => {
  const ctxSchedulingMaintenance = useContext(schedulingMaintenceContext)

  return (
    <Styles.MaintenanceWrapper>
      {ctxSchedulingMaintenance.schedulingMaintenceDates.length > 0 &&
        ctxSchedulingMaintenance.schedulingMaintenceDates.map(
          (week, indexDay) => {
            console.log(week)
            return (
              <Styles.MaintenanceDayWrapper key={`day#${indexDay}`}>
                <Styles.MaintenanceTitle className={week.className}>
                  <Styles.BoldText>{week.dayWeek}</Styles.BoldText>&nbsp;-&nbsp;
                  {week.date}
                </Styles.MaintenanceTitle>
                <Styles.ListPeriods>
                  {week.scheduledPeriods.map(
                    (period, indexPeriod) => {
                      return (
                        <Styles.PeriodItem key={indexPeriod}>
                          <Styles.PeriodLabel
                            htmlFor={`period#${indexDay}-${indexPeriod}`}
                          >
                            {period.period}
                          </Styles.PeriodLabel>
                          <Styles.PeriodInput
                            id={`period#${indexDay}-${indexPeriod}`}
                            type="number"
                            min="0"
                            max="100"
                            value={period.amount}
                            className={period.amount === 0 && 'unAvaliable'}
                            disabled={period.amount === 0 ? true : false}
                            onChange={(e) => {
                              ctxSchedulingMaintenance.editPeriodOfDayWeek(
                                indexDay,
                                indexPeriod,
                                parseInt(e.target.value)
                              )
                            }}
                          ></Styles.PeriodInput>
                          <Styles.PeriodFooter>
                            <Styles.PeriodCheckBox
                              type="checkbox"
                              id={`checkbox${indexDay}-${indexPeriod}`}
                              checked={
                                period.amount === 0 ? true : false
                              }
                              onClick={() => {
                                const amountChange = period.amount === 0 ? 1 : 0
                                ctxSchedulingMaintenance.editPeriodOfDayWeek(
                                  indexDay,
                                  indexPeriod,
                                  amountChange
                                )
                              }}
                            />
                            <Styles.PeriodLabelCheckbox
                              htmlFor={`checkbox${indexDay}-${indexPeriod}`}
                            >
                              Indisponível
                            </Styles.PeriodLabelCheckbox>
                          </Styles.PeriodFooter>
                        </Styles.PeriodItem>
                      )
                    }
                  )}
                </Styles.ListPeriods>
              </Styles.MaintenanceDayWrapper>
            )
          }
        )}
    </Styles.MaintenanceWrapper>
  )
}

export default MaintenanceTechnical
