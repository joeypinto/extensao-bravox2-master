import { CALENDAR_DAYS } from 'constants/temporary'
import { useRouter } from 'next/dist/client/router'
import { createContext, useEffect, useState } from 'react'
import { daysWeekList } from 'utils'
import { serverPath } from './../utils/index';

export const schedulingMaintenceContext = createContext()

const SchedulingMaintenceProvider = ({ children }) => {
  const [schedulingMaintenceDates, setSchedulingMaintenceDates] = useState([])
  const [weekSelected, setWeekSelected] = useState(0)

  const router = useRouter()
  useEffect( async() =>  {
    const calendar = await getCalendar();
    const weekDays = daysWeekList(weekSelected, {
      default: calendar,
      exceptions: []
    })
    const schedulingMaintenance = Object.keys(weekDays).map(
      (weekDay) => weekDays[weekDay]
    )
    setSchedulingMaintenceDates(schedulingMaintenance)
  }, [])

  useEffect(async () => {
    const calendar = await getCalendar();
    const weekDays = daysWeekList(weekSelected, {
      default: calendar,
      exceptions: []
    })
    const schedulingMaintenance = Object.keys(weekDays).map(
      (weekDay) => weekDays[weekDay]
    )
    setSchedulingMaintenceDates(schedulingMaintenance)
  }, [weekSelected])

  const saveMaintenanceSchedulingEditions = async(value) => {
//Ajusta o json para que o mesmo seja enviado para cadastro na API.
    var weekCalendar = []
     schedulingMaintenceDates.map((resp,index) => {
       weekCalendar.push({"id":index+1,"dayWeek":resp.dayWeek,"date":resp.date, "scheduledPeriods":resp.periodsDay.scheduledPeriods})
     })
    await  fetch(`${serverPath}/api/calendar_days`, {method: 'POST',body:JSON.stringify({ID_TECHNICAL:children.props.value.idTechnical,Week:weekSelected,CALENDAR:weekCalendar}),headers: new Headers({'Content-Type': 'application/json'})})
    router.push(`/oficinas-credenciadas/agenda-recorrente`)
  }

  const setWeek = (week = 0) => {
    if (Number.isInteger(week)) {
      setWeekSelected(week)
      return false
    }

    setWeekSelected(0)
  }

  const editPeriodOfDayWeek = (dayPosition, periodPosition, value) => {
    const previewData = schedulingMaintenceDates.map((day, index) => {
      if (index === dayPosition) {
        day.periodsDay.scheduledPeriods[periodPosition].amount = value
      }
      return day
    })
    setSchedulingMaintenceDates(previewData)
  }

  const schedulingMaintenceValues = {
    schedulingMaintenceDates,
    saveMaintenanceSchedulingEditions,
    setWeek,
    editPeriodOfDayWeek
  }
const getCalendar = () =>{
  return fetch(`${serverPath}/api/calendar_days/${children.props.value.idTechnical}?Week=${weekSelected}`, {method: 'GET'}).then(r =>  r.json().then(data => ({status: r.status, body: data})))
  .then(obj => {
    try {
      if(!obj.body.length)
      return CALENDAR_DAYS
      return obj.body[0].CALENDAR
    } catch (error) {
      return CALENDAR_DAYS
    }
  });
}
  return (
    <schedulingMaintenceContext.Provider value={schedulingMaintenceValues}>
      {children}
    </schedulingMaintenceContext.Provider>
  )
}

export default SchedulingMaintenceProvider
