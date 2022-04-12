import ActionButton from './ActionButton'
import ModalCancel from 'components/ModalCancel'
import ModalReview from 'components/ModalReview'
import * as Styles from './styles'
import { convertPeriod } from 'utils'
import ModalInfo from 'components/ModalInfo'

const MyAppointments = ({ appointmentsCurrency }) => {
  const classNameForText = {
    completed: 'concluded',
    canceled: 'cancel',
    pendenting: 'schedule_pendent',
    appointment: 'schedule'
  }

  const formatedData = (date) => {
    return date.substring(8,10)+"/"+ date.substring(5,7) +"/" + date.substring(0,4)
  }

  return (
    <Styles.MyAppointmentsWrapper>
      <ModalCancel />
      <ModalReview />
      <ModalInfo />
      <Styles.HeaderAppointments>
        <h2 className="header__item">Código do Pedido</h2>
        <h2 className="header__item">Status do Agendamento</h2>
        <h2 className="header__item">Ações</h2>
      </Styles.HeaderAppointments>

      {appointmentsCurrency.length > 0 &&
        appointmentsCurrency.map((appointment) => {
          return (
            <Styles.Appointment key={`#${appointment.idTray}`}>
              <div className="appointment__fragment">
                <Styles.FragmentText>
                  <b>{appointment.idTray}</b>
                </Styles.FragmentText>
              </div>
              <div className="appointment__fragment">
                <Styles.FragmentStatus
                  className={classNameForText[appointment.status]}
                >
                  {appointment.status === 'completed' && 'Concluído'}
                  {appointment.status === 'pendenting' &&
                    'Pendente de agendamento'}
                  {appointment.status === 'canceled' && 'Cancelado'}
                  {appointment.status === 'appointment' &&
                    `Agendado | ${formatedData(appointment.dateChance)} - Período da ${convertPeriod(appointment.period)}`}
                    
                </Styles.FragmentStatus>
              </div>
              <div className="appointment__fragment">
                <ActionButton data={appointment} />
              </div>
            </Styles.Appointment>
          )
        })}
    </Styles.MyAppointmentsWrapper>
  )
}

export default MyAppointments
