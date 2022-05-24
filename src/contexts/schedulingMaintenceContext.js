import { CALENDAR_DAYS } from 'constants/temporary'
import { useRouter } from 'next/dist/client/router'
import { createContext, useEffect, useState,useContext } from 'react'
import { daysWeekList } from 'utils'
import { serverPath } from './../utils/index';
import { GlobalContext } from 'contexts/globalContext'

export const schedulingMaintenceContext = createContext()

const SchedulingMaintenceProvider = ({ children }) => {
  const [schedulingMaintenceDates, setSchedulingMaintenceDates] = useState([])
  const [weekSelected, setWeekSelected] = useState(0)
  const GlobalCtx = useContext(GlobalContext)
  const router = useRouter()
  useEffect( async() =>  {
    const calendar = await getCalendar();
    setSchedulingMaintenceDates(calendar)
  }, [])

  useEffect(async () => {
    const calendar = await getCalendar();
    setSchedulingMaintenceDates(calendar)
  }, [weekSelected])

  const saveMaintenanceSchedulingEditions = async() => {
//Ajusta o json para que o mesmo seja enviado para cadastro na API.
    var weekCalendar = []
     schedulingMaintenceDates.map((resp,index) => {
       console.log(resp)
       weekCalendar.push({"id":index+1,"dayWeek":resp.dayWeek,"date":resp.date, "scheduledPeriods":resp.scheduledPeriods})
     })
    await  fetch(`${serverPath}/api/calendar_days`, {method: 'POST',body:JSON.stringify({ID_TECHNICAL:children.props.value.idTechnical,CALENDAR:weekCalendar}),headers: new Headers({'Content-Type': 'application/json'})})
    GlobalCtx.setInformationsModal({
      title: 'Cadastrado com sucesso!',
      body: '<p>A agenda da semana foi cadastrada com sucesso!</p>',
      type: 'success'
    })
    GlobalCtx.toggleModalContainer('alert')
  }

  const setWeek = (week = 0) => {
    if (Number.isInteger(week)) {
      setWeekSelected(week)
      return false
    }

    setWeekSelected(0)
  }

  const editPeriodOfDayWeek = (dayPosition, periodPosition, value) => {
    console.log(dayPosition, periodPosition, value)
    const previewData = schedulingMaintenceDates.map((day, index) => {
      if (index === dayPosition) {
        day.scheduledPeriods[periodPosition].amount = value
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
    console.log("aqui",obj.body)
      return obj.body;
  });
}
  return (
    <schedulingMaintenceContext.Provider value={schedulingMaintenceValues}>
      {children}
    </schedulingMaintenceContext.Provider>
  )
}

export default SchedulingMaintenceProvider
