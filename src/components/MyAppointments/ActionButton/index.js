import { useContext } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faCalendarCheck,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from 'contexts/globalContext'
import { UserContext } from 'contexts/userContext'
import * as Styles from './styles'

const ActionButton = ({ data }) => {
  const router = useRouter()
  const ctxGlobal = useContext(GlobalContext)
  const ctxUser = useContext(UserContext)
  const textNameButton = {
    completed: 'Avaliar',
    canceled: 'Reagendar',
    pendenting: 'Agendar',
    appointment: 'Reagendar'
  }

  const generateReview = (reviewNote) => {
    let arrReviews = Array(5)
      .fill(null)
      .map((position, index) => index + 1)

    return (
      <Styles.ReviewContent>
        {arrReviews.map((review) => {
          let star = review <= parseInt(reviewNote) ? '#d4c073' : '#717171'

          return (
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              color={star}
              key={review}
            />
          )
        })}
      </Styles.ReviewContent>
    )
  }

  const redirectMapOfAppointment = () => {
    router.push(`/mapa-de-agendamentos/${data.idTray}`)
  }

  const cancelAppointment = () => {
    ctxUser.setAppointmentForCancel(data.idTray)
    ctxGlobal.toggleModalContainer('cancel')
  }

  const reviewAppointment = () => {
    ctxUser.setAppointmentForReview(data)
    ctxGlobal.toggleModalContainer('review')
  }

  const redirectMapForReschendule = () => {
    router.push({
      pathname: `/mapa-de-agendamentos/${data.idTray}`,
      //query: { tid: data.tecnicalId }
    })
  }

  return (
    <>
      {data.review !== null &&
        data.status === 'completed' &&
        generateReview(data.review)}

      {data.review === null && data.status === 'completed' && (
        <Styles.FragmentButton
          className="isAvaliable"
          onClick={() => {
            reviewAppointment()
          }}
        >
          Avaliar
        </Styles.FragmentButton>
      )}

      {data.status === 'pendenting' && (
        <Styles.FragmentButton
          className="reschedule"
          onClick={() => {
            redirectMapOfAppointment()
          }}
        >
          Agendar
        </Styles.FragmentButton>
      )}

      {data.review === null &&
        data.status !== 'completed' &&
        data.status !== 'pendenting' && (
          <>
            <Styles.FragmentButton
              className={`${
                (data.status === 'canceled' || data.status === 'appointment') &&
                'reschedule'
              } ${data.status === 'appointment' && 'roundedStatus'}`}
              onClick={() => {
                redirectMapForReschendule()
              }}
            >
              {data.status === 'canceled' ? (
                textNameButton[data.status]
              ) : (
                <>
                  <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  <span className="text__button">Reagendar</span>
                </>
              )}
            </Styles.FragmentButton>
            {data.status === 'appointment' && (
              <Styles.FragmentButton
                className="cancel__appointment roundedStatus"
                onClick={() => cancelAppointment()}
              >
                <FontAwesomeIcon icon={faTimesCircle} size="1x" />
                <span className="text__button">Cancelar</span>
              </Styles.FragmentButton>
            )}
          </>
        )}
    </>
  )
}

export default ActionButton
