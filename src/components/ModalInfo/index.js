import { useContext, useState, useEffect } from 'react'
import ModalContainer from 'containers/ModalContainer'
import { GlobalContext } from 'contexts/globalContext'
import { UserContext } from 'contexts/userContext'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faStar,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'
import { serverPath } from './../../utils/index';


const ModalInfo = () => {
  const [tencicalInfo, setTecnicalInfo] = useState([])
  const ctxGlobal = useContext(GlobalContext)
  const ctxUser = useContext(UserContext)
  useEffect( async () => {
    const order = ctxUser.appointmentForInfoOrder;
    const list = await fetch(`${serverPath}/api/tecnical`, {method: 'GET',headers: new Headers({'Content-Type': 'application/json'})});
    const TECNICALS_API = await list.json();
    console.log(TECNICALS_API,"sa")
   //irá consultar a api da teia para saber qual é a Assistência técnica
   //Se existir faz a execução a abaixo caso não ai ele fara um modal surgir
   TECNICALS_API.map((tecnical) => {
     if (tecnical.ID === order.tecnicalId) {
       setTecnicalInfo([tecnical])
     }
   })
  }, [ctxUser.appointmentForInfoOrder]);

  const CloseModal = () => {
    ctxGlobal.toggleModalContainer('init')

    setTimeout(function () {
      ctxUser.setAppointmentForInfo([])
    }, 1000)
  }
  const isValidPhone = (phone) => {
    try {
      const phoneFormated = String(phone)
        .replace(/-/gi, '')
        .replace(/\(/gi, '')
        .replace(/\)/gi, '')

      if (phoneFormated.trim() !== '' && phoneFormated.trim().length >= 10) {
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }
  const isConvertDate = (date) => {
    const newDate = new Date(String(date).replace(/-/gi, '/'))
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`
  }
  return (
    <ModalContainer isOpen={ctxGlobal.isToggleModal === 'info' && true}>
      <Styles.Wrapper role="dialog">
      <Styles.ReviewHeader>
          <Styles.ReviewHeaderTitle>
            Informações do agendamento
          </Styles.ReviewHeaderTitle>
          <Styles.CloseReview type="button" onClick={() => CloseModal()}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </Styles.CloseReview>
        </Styles.ReviewHeader>
        <Styles.ReviewBody>
        <Styles.ReviewTecnicalInfo>
            {tencicalInfo.length > 0 &&
              tencicalInfo.map((tecnical) => {
                return (
                  <div key={tecnical.ID}>
                    <Styles.ReviewTitle>{tecnical.NOME}</Styles.ReviewTitle>
                    <Styles.ReviewTecnicalInfoText>
                      Responsável: Nome
                    </Styles.ReviewTecnicalInfoText>
                    <Styles.ReviewTecnicalInfoText className="address">
                      {`${tecnical.ENDERECO}, ${tecnical.BAIRRO} - ${tecnical.MUNICIPIO}, ${tecnical.ESTADO} - ${tecnical.CEP}`}
                    </Styles.ReviewTecnicalInfoText>
                    <Styles.ReviewTecnicalInfoText>
                      {isValidPhone(tecnical.TELEFONE)
                        ? tecnical.TELEFONE
                        : 'Telefone Indisponível'}
                    </Styles.ReviewTecnicalInfoText>
                  </div>
                )
              })}
            <Styles.ReviewTecnicalInfoText className="bolder dateService">
              Atendimento será realizado em: <br />
              {isConvertDate(ctxUser.appointmentForInfoOrder.dateChance)}
            </Styles.ReviewTecnicalInfoText>
          </Styles.ReviewTecnicalInfo>
          <Styles.ReviewUserForm>
          <Styles.ReviewTitle>{ctxUser.appointmentForInfoOrder.name_client}</Styles.ReviewTitle>
          <Styles.ReviewTecnicalInfoText>
            Número de pedido: {ctxUser.appointmentForInfoOrder.idTray}
          </Styles.ReviewTecnicalInfoText>
          </Styles.ReviewUserForm>
        </Styles.ReviewBody>   
        </Styles.Wrapper>  
    </ModalContainer>
  )

}

export default ModalInfo
