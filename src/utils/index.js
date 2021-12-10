import { STATUS_LIST } from 'constants/globals'
import { DAYS_WEEK } from 'constants/sheduling'
import { server } from './index';

//Validação de CPF
export const isValidCPF = (cpf) => {
  let sum = 0
  let rest

  if (cpf.replace(/\./g, '').replace(/\_/g, '').length < 11) {
    return false
  }
  cpf = cpf.replace(/[\s.-]*/gim, '')

  if (!cpf || String(cpf).match(/(\d)\1{10}/) !== null) {
    return false
  }

  for (var i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)

  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0

  if (rest != parseInt(cpf.substring(9, 10))) return false
  sum = 0

  for (var i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) rest = 0

  if (rest != parseInt(cpf.substring(10, 11))) return false

  return true
}

//Geração de data randomica (temporário)
export const dateRandomGenerate = (min, max) => {
  const todayMonth = new Date().getMonth()
  let dayRandom = Math.ceil(Math.random() * (max - min + 1) + min)
  return `2021-${todayMonth + 1}-${dayRandom}`
}

//Geração de numero randomica (temporário)
export const numberRandom = () => {
  return Math.ceil(Math.random() * (200 - 0 + 1) + 0)
}

//Geração de reviews randomica (temporário)
export const numberAvarageReviews = () => {
  const primaryNumber = Math.ceil(Math.random() * (5 - 3 + 1) + 3)
  const firstHouseDecimal =
    primaryNumber === 5 ? 0 : Math.ceil(Math.random() * (9 - 0 + 1) + 0)
  return parseFloat(`${primaryNumber}.${firstHouseDecimal}`)
}

//Formatar data para exibir
export const formatedDateShow = (date) => {
 return date.substring(8,10)+"/"+ date.substring(5,7) +"/" + date.substring(0,4)
}


//Valida o tamanho do objeto
export const validateLengthObject = (obj) => {
  return Object.keys(obj).length > 0 ? true : false
}

//Converter em Array
export const convertInArray = (el) => Array.prototype.slice.call(el)

const dayWeekFormated = (newDay, formated = 'BD') => {

  if (formated === 'BD') {
    return newDay.toISOString().slice(0, 10);
  }

  return `${newDay.getDate()}/${newDay.getMonth() + 1}/${newDay.getFullYear()}`
}

const dateRegulator = (week,day) => {
  var today = new Date();
  const regulator = (7*week) + (day)
  today.setDate(today.getDate() - today.getDay() + regulator)
  return today
}


export const daysWeekList = (
  week,
  values = {
    default: [],
    exceptions: []
  }
) => {
  const dayAccessToday = new Date()
  const today = new Date()
  today.setDate(new Date().getDate() + week * 7)
  const dayWeek = today.getDay()
  const daysWeekListForInstallations = {}
  const valuesDays = values.default.slice()

  Array(7)
    .fill(null)
    .forEach((el, index) => {
      const reduceDate = dateRegulator(
        week,
        index
      )

      // Pegar os periodos do dia
      const validateExceptions =
        values.exceptions.length > 0
          ? values.exceptions.filter((expectionDay) => {
              const dayFormated = new Date(expectionDay.day.replace(/-/gi, '/'))
              return dayFormated === reduceDate
            })
          : []
      const periods =
        validateExceptions.length > 0 ? validateExceptions : valuesDays[index]
      daysWeekListForInstallations[index] = {
        dayWeek: DAYS_WEEK[index],
        data:
           dayWeekFormated(reduceDate, 'WEB'),
        date:
            dayWeekFormated(reduceDate),
        className:
          dayWeekFormated(dayAccessToday, 'WEB',"4") ===
          dayWeekFormated(reduceDate, 'WEB',"4")
            ? 'isToday'
            : '',
        periodsDay: periods
      }
    })
  return daysWeekListForInstallations
}

//Achando label do Status
export const findStatusShow = (value) => {
  return STATUS_LIST.filter((statusObj) => statusObj.value === value)
    .map((status) => status.label)
    .join('')
}
export const getSunday = (value) =>{
  var today = new Date();
  today.setDate(today.getDate() - today.getDay() + value)
  return today.toISOString().slice(0, 10);
}
const dev = process.env.NODE_ENV !== 'production';
//export const serverPath = dev ? 'http://localhost:3000' : 'https://bravox-app.herokuapp.com';
export const serverPath = 'https://extensao-bravox2-master-q0biqf3h9-joeypinto.vercel.app'
