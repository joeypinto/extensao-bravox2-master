import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from 'contexts/globalContext'
import { UserContext } from 'contexts/userContext'
import ModalContainer from 'containers/ModalContainer'
import * as Styles from './styles'
import { useRouter } from 'next/dist/client/router';
import { serverPath } from './../../utils/index';

const ModalCancel = () => {
  //null, success, fail
  const [status, setStatus] = useState(null)
  const ctxGlobal = useContext(GlobalContext)
  const ctxUser = useContext(UserContext)
  const router = useRouter()
  const CloseModal = () => {
    ctxGlobal.toggleModalContainer('init')

    setTimeout(function () {
      ctxUser.setAppointmentForCancel(null)
    }, 1000)
  }

  const canceledAppointment = () => {

    const idAppointment = ctxUser.appointmentCancelForUser
    fetch(`${serverPath}/api/orders`,  {method: 'DELETE',body:JSON.stringify({orderId:idAppointment}),headers: new Headers({'Content-Type': 'application/json'})}).then(r =>  r.json().then(data => { }))
    //Executa função de cancelar na api
    //dentro do fecth fecha o modal
    //setTime abaixo para emular
    CloseModal()
    router.reload(`/agendamentos`)
  }

  return (
    <ModalContainer isOpen={ctxGlobal.isToggleModal === 'cancel' && true}>
      <Styles.Wrapper>
        <Styles.ButtonClose
          onClick={() => CloseModal()}
          type="button"
          aria-label="Botão para fechar"
        >
          <FontAwesomeIcon icon={faTimes} size="1x" />
        </Styles.ButtonClose>
        <Styles.CancelModalDivisor className="is__top">
          <Styles.Header>
            <Styles.TitleHeader>
              Agendamento #
              {ctxUser.appointmentCancelForUser !== null &&
                ctxUser.appointmentCancelForUser}
            </Styles.TitleHeader>
          </Styles.Header>
          <Styles.ContentImage>
            <source
              media="(min-width: 767px)"
              srcSet="/images/cancel_image.svg"
            />
            <img
              src="/images/cancel_image.svg"
              alt="Imagem de cancelar com um X no centro"
            />
          </Styles.ContentImage>
        </Styles.CancelModalDivisor>
        <Styles.CancelModalDivisor className="is__bottom">
          <Styles.CancelContent>
            <Styles.ContentField>
              <Styles.Label htmlFor="motivo">
                Motivo do Cancelamento
              </Styles.Label>
              <Styles.InformationCancel
                id="motivo"
                placeholder="Só um minuto, poderia nos dizer mais sobre o motivo do
              cancelamento?"
              ></Styles.InformationCancel>
              <Styles.ButtonCancel
                type="button"
                onClick={() => canceledAppointment()}
              >
                <FontAwesomeIcon icon={faTimes} size="1x" />
                Cancelar
              </Styles.ButtonCancel>
            </Styles.ContentField>
          </Styles.CancelContent>
        </Styles.CancelModalDivisor>
      </Styles.Wrapper>
    </ModalContainer>
  )
}

export default ModalCancel
