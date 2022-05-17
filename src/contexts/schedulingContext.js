import { useRouter } from 'next/router'
import { createContext, useState, useEffect,useContext } from 'react'
import { TECHNICAL_DAYS } from '../constants/temporary'
import { CALENDAR_DAYS } from 'constants/temporary'
import { serverPath } from './../utils/index';
import { GlobalContext } from 'contexts/globalContext'
export const SchedulingContext = createContext()

const SchedulingContextProvider = ({ children }) => {
  const [scheduling, setScheduling] = useState([])
  const [maintenance, setMaintenanceScheduling] = useState([])
  const [daysOfTechnical, setDaysOfTechnical] = useState([])
  const [orderSelected, setOrderSelected] = useState({})
  const [periodSelected, setPeriodSelected] = useState('morning')
  const [calendar, setCalendar] = useState('')
  const [technical, setTechnical] = useState('')
  const router = useRouter()
  const GlobalCtx = useContext(GlobalContext)
  useEffect( async() => {
    var TECHNICAL_DAYS = []
    const calendar = await getCalendar();
    calendar.map((scheduleDay,index) => {
      if(scheduleDay.scheduledPeriods[0].amount >=1){
      TECHNICAL_DAYS.push({
        id:TECHNICAL_DAYS.length,amount:scheduleDay.scheduledPeriods[0].amount,day: scheduleDay.date,period: scheduleDay.scheduledPeriods[0].period
      })
    } if(scheduleDay.scheduledPeriods[1].amount >=1){
      TECHNICAL_DAYS.push({
        id:TECHNICAL_DAYS.length,amount:scheduleDay.scheduledPeriods[1].amount,day: scheduleDay.date,period: scheduleDay.scheduledPeriods[1].period
      })}
      if(scheduleDay.scheduledPeriods[2].amount >=1){
      TECHNICAL_DAYS.push({
        id:TECHNICAL_DAYS.length,amount:scheduleDay.scheduledPeriods[2].amount,day: scheduleDay.date,period: scheduleDay.scheduledPeriods[2].period
      })}
    })
    setDaysOfTechnical(TECHNICAL_DAYS)
  }, [])

  useEffect(async () => {
    setTechnical(children.props.value.idTechnical)
    const calendar = await getCalendar();
    setCalendar(calendar)
    setPeriodSelected(orderSelected.period)
  }, [orderSelected])

  const initScheduling = (arr) => setScheduling(arr)
  const initMaintenanceScheduling = (arr) => setMaintenanceScheduling(arr)

  const selectedMaintenancePeriod = (event) => {
    const valueSelected = event.target.value === '' ? 0 : event.target.value
    setPeriod(valueSelected)
  }

  const changeScheduling = (event) => {
    const value = event.target.value
    const day = parseInt(event.target.getAttribute('data-day'))
    const period = event.target.getAttribute('data-period')

    const tempScheduling = scheduling.map((schedule, index) => {
      if (index === day) {
        schedule.scheduledPeriods[period].amount = parseInt(value)
      }
      return schedule
    })
    setScheduling(tempScheduling)
  }

  const saveSchedulingEditions = (value) => {
    fetch(`${serverPath}/api/calendar_fixed`, {method: 'POST',body:JSON.stringify({ID_TECHNICAL:children.props.value.idTechnical,CALENDAR:value}),headers: new Headers({'Content-Type': 'application/json'})}).then((response) => console.log(""));
    GlobalCtx.setInformationsModal({
      title: 'Cadastrado com sucesso!',
      body: '<p>A agenda da semana foi cadastrada com sucesso!</p>',
      type: 'success'
    })
    GlobalCtx.toggleModalContainer('alert')
    //router.push(`/oficinas-credenciadas/agenda-recorrente`)
  }

  const saveInfoOrderModify = (
    id,
    dateCurrencyOrder,
    periodOrder,
    reset = false
  ) => {
    const data = reset
      ? {}
      : {
          id: id,
          dateCurrencyOrder: dateCurrencyOrder,
          period: periodOrder
        }
    setOrderSelected(data)
  }
const getCalendar = () =>{  
  return fetch(`${serverPath}/api/calendar_fixed/?ID_TECHNICAL=${children.props.value.idTechnical}`, {method: 'GET'}).then(r =>  r.json().then(data => ({status: r.status, body: data})))
  .then(obj => {
    try { 
      return obj.body; 
    } catch (error) {
      return CALENDAR_DAYS
    }
  });
}
  const SchedulingState = {
    maintenance,
    scheduling,
    daysOfTechnical,
    orderSelected,
    periodSelected,
    calendar,
    technical,
    changeScheduling,
    initScheduling,
    initMaintenanceScheduling,
    saveSchedulingEditions,
    selectedMaintenancePeriod,
    saveInfoOrderModify,
    setPeriodSelected

  }

  return (
    <SchedulingContext.Provider value={SchedulingState}>
      {children}
    </SchedulingContext.Provider>
  )
}

export default SchedulingContextProvider
