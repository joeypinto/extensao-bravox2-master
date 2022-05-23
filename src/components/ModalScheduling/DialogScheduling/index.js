import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'
import { parseISO, format } from 'date-fns'
import { MapContext } from 'contexts/mapContext'
import * as Styles from './styles'
import 'react-datepicker/dist/react-datepicker.css'
import {
  CLASSES_DATE_PICKER,
  INITIAL_NOTIFY_ERROR,
  LEGENDS_DAYS
} from 'constants/sheduling'
import { GlobalContext } from 'contexts/globalContext'
import { useRouter } from 'next/router';
import { serverPath } from './../../../utils/index';
registerLocale('pt-BR', ptBR)

//Formatar para extrair o string necessário do DatePicker
const extractDataPicker = (dateRaw) => {
  const date = new Date(dateRaw)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

//Formatar para o New Date devido a Problema de converter
const formatDateStringToBar = (dateString) => {
  return String(dateString).replace(/-/gi, '/')
}

//Formatar para validar as datas
const formatDateToValidate = (date, formated = 0) => {
  const dateIsValid =
    formated === 0 ? new Date(formatDateStringToBar(date)) : date
  return (
    dateIsValid.getFullYear() +
    '-' +
    (dateIsValid.getMonth() + 1) +
    '-' +
    dateIsValid.getDate()
  )
}

//Formatar para usar o ParseIso
const formatedDateParseISO = (dateForConvert) => {
  return `${dateForConvert.getFullYear()}-${String(
    dateForConvert.getMonth() + 1
  ).padStart(2, '0')}-${String(dateForConvert.getDate()).padStart(2, '0')}`
}

const DialogScheduling = ({ tecnicalData }) => {
  const ctxContext = useContext(MapContext).filtersAndTecnicals
  const ctxGlobal = useContext(GlobalContext)
  const router = useRouter()
  const [dateSendProduct, setDateSendProduct] = useState('')
  const [dateActive, setDateActive] = useState(false)
  const [notifyError, setNotifyError] = useState(INITIAL_NOTIFY_ERROR)
  const [periodTecnical, setPeriodTecnical] = useState([])
  const [dateSelect, setDateSelect] = useState(new Date())

  //Apresenta as datas no formato
  const formatDateToDisplay = (date) => {
    const parseDate = parseISO(formatedDateParseISO(date))

    return format(parseDate, "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR
    })
  }

  //Avalia datas validas
  const validateDate = (dataToValidate) => {
    let data = new Date(dataToValidate);
    let listOfValidDates = tecnicalData.calenderTecnical.filter((validate) => {
      return (
        validate.date === data.toISOString().slice(0, 10) &&
        validate.scheduledPeriods[0].amount + validate.scheduledPeriods[1].amount + validate.scheduledPeriods[2].amount === 0
      )
    })
    return listOfValidDates
  }
  const validateDateFixed = (dataToValidate) => {
    let data = new Date(dataToValidate);
   
    let listOfValidDates = tecnicalData.calenderTecnicalFixed.filter((validate) => {
      return (
        validate.id === 
        (data.getDay()+1)
      )
    })
    return listOfValidDates
  }

  //Valida dias disponiveis
  const validateCalenderDays = (daysList) => {
    if(daysList === undefined){
    daysList = [{id: 1, period: 'Manhã', amount: 0},{id: 2, period: 'Tarde', amount: 0},{id: 3, period: 'Noite', amount: 0}]}

    let validDates = daysList.filter((day) => {
      return day.amount > 0
    })

    return validDates.length > 0 ? true : false
  }

  useEffect(() => {
    //pedido esta aqui e pode ser utilizado no lugar do useEffect
    const order = ctxContext.order
    //puxar por api da tray, provavel que pegue o format de data para utilizar
    setDateSendProduct(order.dateOrder)

    const validDaysOfTechnicalAssistance = tecnicalData.calenderTecnical.filter(
      (date) => {
        return (
          validateCalenderDays(date.periods) &&
          new Date(formatDateStringToBar(date.dateCalender)) >= new Date()
        )
      }
    )

    const selectedDates =
      validDaysOfTechnicalAssistance.length > 0
        ? validDaysOfTechnicalAssistance
        : false

    if (selectedDates) {
      if (new Date(selectedDates[0].dateCalender) >= new Date()) {
        setDateSelect(
          new Date(formatDateStringToBar(selectedDates[0].dateCalender))
        )
      }
    }

    const possiblePeriods = selectedDates
      ? selectedDates[0].periods.filter((period) => {
          return period.amount > 0
        })
      : []

    setPeriodTecnical(possiblePeriods)

    return null
  }, [])

  const validateDatesAndAssignCorrespondingClasses = (date) => {
    const dateIsValid = formatDateToValidate(date)
    const dateSendOrder = formatDateToValidate(dateSendProduct)
    const today = new Date()
    const todyIsBiggestDateCalender =
      new Date(formatDateStringToBar(date)) < today

    if (
      new Date(formatDateStringToBar(dateIsValid)).getMonth() < today.getMonth()
    ) {
      //Verifica se está dentro do mês
      return CLASSES_DATE_PICKER.DONT_MONTH_CURRENCY
    } else if (todyIsBiggestDateCalender) {
      //Verifica se o dia é após o dia atual
      return CLASSES_DATE_PICKER.DISABLED
    } else if (
      dateIsValid === dateSendOrder &&
      validateDate(dateSendOrder).length <= 0
    ) {
      //Verifica se o dia é após o dia atual
      return CLASSES_DATE_PICKER.NO_DATE_SEND_PRODUCT
    } else if (
      dateIsValid === dateSendOrder &&
      validateDate(dateSendOrder).length > 0
    ) {
      //Verifica se o dia é exatamente igual o dia da entrega do pedido
      return CLASSES_DATE_PICKER.DATE_SEND_PRODUCT
    } else if (
      new Date(formatDateStringToBar(dateIsValid)) < today ||
      new Date(formatDateStringToBar(dateIsValid)) <
        new Date(formatDateStringToBar(dateSendOrder))
    ) {
      //Verifica se a data é anterior a de hoje ou anterior a data de envio
      return CLASSES_DATE_PICKER.DISABLED
    }else if (validateDateFixed(dateIsValid).length > 0) {
      if((validateDate(dateIsValid).length > 0)){
        return CLASSES_DATE_PICKER.UNVALIABLE
      }else{
        return CLASSES_DATE_PICKER.AVALIABLE
      }
      //Verifica se a data é válida
    } else {
      //Caso passe por todas essas validações desabilita
      return CLASSES_DATE_PICKER.UNVALIABLE
    }
  }

  const validPeriods = (selectedDate) => {

    let amountForDate = tecnicalData.calenderTecnical.filter((dateAnalisy) => {      
      let data = new Date(selectedDate);
      return dateAnalisy.date === data.toISOString().slice(0, 10)
    })
    if(!!amountForDate){
      amountForDate = tecnicalData.calenderTecnicalFixed.filter((dateAnalisy) => {      
        let data = new Date(selectedDate);
        return dateAnalisy.id === (data.getDay()+1)
      })
      console.log(amountForDate,"amountForDate2",tecnicalData)
    }
    console.log(amountForDate,"amountForDate",!!amountForDate)
    let newPeriods = amountForDate[0].scheduledPeriods.filter((newPeriod) => {

      return newPeriod.amount > 0
    })
    setPeriodTecnical(newPeriods)
  }
 const periodType= (value) =>{
        if(value === 'Manhã'){
          return 'morning'
        }
        if(value === 'Tarde'){
          return 'evening'
        }
        if(value === 'Noite'){
          return 'night'
        }
 }
 const chageButton = (e) => {
  ctxContext.changeScheduling('period', e);
  setDateActive(true);
}
  const changeDateState = (date) => {
    ctxContext.resetScheduling()
    let validate = validateDatesAndAssignCorrespondingClasses(date)

    if (validate === 'avaliable' || validate === 'dateSendProduct') {
      setNotifyError(INITIAL_NOTIFY_ERROR)

      let dateFormated = formatDateToValidate(date)

      ctxContext.changeSchedulingDate('dateScheduling', dateFormated)

      setDateSelect(new Date(formatDateStringToBar(date)))

      validPeriods(dateFormated)
    } else {
      setNotifyError({
        ...notifyError,
        message: 'Data inválida.'
      })
    }
  }

  return (
    <Styles.ModalSchedulingDialog role="document">
      <Styles.DialogHeader>
        <Styles.DialogHeaderTitle>
          {tecnicalData.NOME} | {tecnicalData.BAIRRO} - {tecnicalData.ESTADO}
        </Styles.DialogHeaderTitle>
        <Styles.ButtonCloseScheduling
          type="button"
          aria-label="Ícone de fechar"
          onClick={() => {
            ctxGlobal.toggleModalContainer('init')
            ctxContext.openDialogConfirmed()
            setDateActive(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Styles.ButtonCloseScheduling>
      </Styles.DialogHeader>

      <Styles.DialogWrapper>
        <Styles.DivisorDialogScheduling>
          <ReactDatePicker
            selected={dateSelect}
            dayClassName={(date) =>
              validateDatesAndAssignCorrespondingClasses(
                extractDataPicker(date)
              )
            }
            onChange={(e) => changeDateState(extractDataPicker(e))}
            locale="pt-BR"
            inline
          />
        </Styles.DivisorDialogScheduling>

        <Styles.DivisorDialogScheduling>
          <Styles.DialogPeriodContent>
            <Styles.DialogLabel htmlFor="selectPeriod">
              Período
            </Styles.DialogLabel>
            {periodTecnical.length > 0 &&
            (validateDatesAndAssignCorrespondingClasses(
              formatDateToValidate(dateSelect, 1)
            ) === 'dateSendProduct' ||
              validateDatesAndAssignCorrespondingClasses(
                formatDateToValidate(dateSelect, 1)
              ) === 'avaliable') ? (
              <Styles.DialogSelect
                id="selectPeriod"
                onClick={(e) => chageButton(e)}
              >
                {periodTecnical.map((period, index) => {
                  return (
                    <option
                      key={index}
                      value={period.id}
                      data-ref={periodType(period.period)}
                    >
                      {period.period}
                    </option>
                  )
                })}
              </Styles.DialogSelect>
            ) : (
              <Styles.DialogAlertDontPeriod>
                Nenhum período disponível
              </Styles.DialogAlertDontPeriod>
            )}
          </Styles.DialogPeriodContent>
        </Styles.DivisorDialogScheduling>
        <Styles.DivisorDialogScheduling>
          <Styles.ConfirmedInfo>
            <Styles.ConfirmedInfoTitle>Confirmação</Styles.ConfirmedInfoTitle>
            {notifyError.message !== '' && (
              <Styles.ConfirmedInfoError>
                {notifyError.message}
              </Styles.ConfirmedInfoError>
            )}
            <Styles.ConfirmedInfoSubTitle>
              Será Marcada para o dia:
            </Styles.ConfirmedInfoSubTitle>
            <Styles.ConfirmedInfoDate>
              {notifyError.message != ''
                ? '-- '
                : `${formatDateToDisplay(dateSelect)} - `}
              {ctxContext.scheduling.period === ''
                ? '--'
                : ctxContext.scheduling.schedulinglabel}
            </Styles.ConfirmedInfoDate>
          </Styles.ConfirmedInfo>
          <Styles.Confirmedbutton type="button"  disabled={!dateActive}
          onClick={(e) => {
          try {
            var order = ctxContext.order
            order["status"] = "appointment"
            if(periodType(ctxContext.scheduling.schedulinglabel) === undefined)
            throw new Error('Exception message');
            order["period"] = periodType(ctxContext.scheduling.schedulinglabel)
            order["tecnicalId"] = ctxContext.assistentsTecnicaslSelected
            order["dateChance"] = dateSelect.toISOString().slice(0, 10)
              fetch(`${serverPath}/api/orders`,  {method: 'POST',body:JSON.stringify({order:order}),headers: new Headers({'Content-Type': 'application/json'})}).then(r =>  r.json().then(data => {
             router.push(`/agendamentos`)
             }))
          } catch (error) {
            let infoModal = {
              title: 'Não foi possível confirmar o agendamento',
              body: '<p>Verifique a data e o período se foram informados corretamente.</p>',
              type: 'error'
            }
            ctxGlobal.setInformationsModal(infoModal)
            ctxGlobal.toggleModalContainer('alert')
          }
          }}
          >
            Confirmar

          </Styles.Confirmedbutton>
        </Styles.DivisorDialogScheduling>
      </Styles.DialogWrapper>
      <Styles.DialogFooter>
        <Styles.FooterContent>
          <Styles.FooterTitle>Legenda:</Styles.FooterTitle>
          <Styles.FooterLegend>
            {LEGENDS_DAYS.map((legend) => {
              return (
                <Styles.LegendItem key={`#${legend.id}`}>
                  <Styles.FooterImageLegend
                    className={legend.classLegend}
                    role="img"
                  />
                  <Styles.LegendLabel>{legend.legend}</Styles.LegendLabel>
                </Styles.LegendItem>
              )
            })}
          </Styles.FooterLegend>
        </Styles.FooterContent>
      </Styles.DialogFooter>
    </Styles.ModalSchedulingDialog>
  )
}

export default DialogScheduling
