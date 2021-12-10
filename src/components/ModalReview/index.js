import { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faStar,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from 'contexts/globalContext'
import { UserContext } from 'contexts/userContext'
import ModalContainer from 'containers/ModalContainer'
import { TECNICALS_API } from 'constants/temporary'
import * as Styles from './styles'
import { serverPath } from './../../utils/index';

const ModalReview = () => {
  const ctxGlobal = useContext(GlobalContext)
  const ctxUser = useContext(UserContext)
  const [tencicalInfo, setTecnicalInfo] = useState([])
  const [review, setReview] = useState(5)

  useEffect( async () => {
    const order = ctxUser.appointmentForReviewOrder
     const list = await fetch(`${serverPath}/api/tecnical`, {method: 'GET',headers: new Headers({'Content-Type': 'application/json'})});
     const TECNICALS_API = await list.json();
    //irá consultar a api da teia para saber qual é a Assistência técnica
    //Se existir faz a execução a abaixo caso não ai ele fara um modal surgir
    TECNICALS_API.map((tecnical) => {
      if (tecnical.ID === order.tecnicalId) {
        setTecnicalInfo([tecnical])
      }
    })
  }, [ctxUser.appointmentForReviewOrder])

  const CloseModal = () => {
    ctxGlobal.toggleModalContainer('init')

    setTimeout(function () {
      ctxUser.setAppointmentForReview([])
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

  const saveReview = () => {

    const orderCurrency = ctxUser.appointmentForReviewOrder
    orderCurrency["review"] = review
    orderCurrency["description"] = reviewAnotation.value
    fetch(`${serverPath}/api/reviews`,  {method: 'POST',body:JSON.stringify({order:orderCurrency}),headers: new Headers({'Content-Type': 'application/json'})}).then(r =>  r.json().then(data => {
           ctxGlobal.toggleModalContainer('init')
        }))

    //dentro do fetch


    setTimeout(function () {
      ctxUser.setAppointmentForReview([])
    }, 1000)
  }

  return (
    <ModalContainer isOpen={ctxGlobal.isToggleModal === 'review' && true}>
      <Styles.Wrapper role="dialog">
        <Styles.ReviewHeader>
          <Styles.ReviewHeaderTitle>
            Avaliar Atendimento
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
              Atendimento Realizado em: <br />
              {isConvertDate(ctxUser.appointmentForReviewOrder.dateChance)}
            </Styles.ReviewTecnicalInfoText>
          </Styles.ReviewTecnicalInfo>
          <Styles.ReviewUserForm>
            <Styles.ReviewTitle>Sua Avaliação</Styles.ReviewTitle>
            <Styles.ReviewNoteContent>
              <Styles.ReviewNoteList>
                {Array(5)
                  .fill(null)
                  .map((element, index) => {
                    let position = index + 1
                    return (
                      <li key={position}>
                        <Styles.ReviewButton
                          type="button"
                          className={position <= review && 'IsActive'}
                          onClick={() => {
                            setReview(position)
                          }}
                        >
                          <FontAwesomeIcon icon={faStar} size="1x" />
                        </Styles.ReviewButton>
                      </li>
                    )
                  })}
              </Styles.ReviewNoteList>
              <Styles.ReviewCount>
                {parseFloat(review).toFixed(1)}
              </Styles.ReviewCount>
            </Styles.ReviewNoteContent>
            <Styles.ReviewAnotationContent>
              <Styles.ReviewAnotationLabel htmlFor="reviewAnotation">
                Adicione um comentário
              </Styles.ReviewAnotationLabel>
              <Styles.ReviewAnotation
                id="reviewAnotation"
                rows="5"
              ></Styles.ReviewAnotation>
            </Styles.ReviewAnotationContent>
            <Styles.AnotationFooter>
              <Styles.ReviewButtonSubmit
                type="button"
                onClick={() => {
                  saveReview()
                }}
              >
                Confirmar
                <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />
              </Styles.ReviewButtonSubmit>
            </Styles.AnotationFooter>
          </Styles.ReviewUserForm>
        </Styles.ReviewBody>
      </Styles.Wrapper>
    </ModalContainer>
  )
}

export default ModalReview
