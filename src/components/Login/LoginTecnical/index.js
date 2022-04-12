import { useState, useContext } from 'react'
import * as Styles from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/dist/client/router'
import {
  faAngleDoubleRight,
  faAngleDoubleLeft
} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from 'contexts/userContext'
import { GlobalContext } from 'contexts/globalContext'
import { useDebouncedCallback } from 'use-debounce'
import { ENDPOINT } from 'constants/globals'
import { serverPath } from './../../../utils/index';

const LoginTechical = () => {
  const GlobalCtx = useContext(GlobalContext)
  const [fieldEmail, setFieldEmail] = useState('')
  const [fieldEmailError, setFieldEmailError] = useState('')
  const UserCtx = useContext(UserContext)
  const router = useRouter()
  const BRAVOX_TOKEN = process.env.NEXT_PUBLIC_BRAVOX_TOKEN

  const changeEmailFied = useDebouncedCallback((e) => {
    setFieldEmail(e.target.value)
    fieldEmailError !== '' && setFieldEmailError('')
  }, 200)

  const returnHomeInitial = () => {
    GlobalCtx.changeProfile('initial')
  }
  const validEmail = (email) => {
    const REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g
    return REGEX.test(email)
  }

  const isRegisterEmailTechnical = (dataset) =>
    dataset.filter((data) => data.EMAIL === fieldEmail)

  const redirectLogin = async (dataset) => {
    const registerEmail = isRegisterEmailTechnical(dataset)
    if (registerEmail.length > 0) {
      const res = await UserCtx.setUserInfo(registerEmail[0].ID, 1)
      res === 'complete' &&
      createApi(registerEmail);
        router.push(`/oficinas-credenciadas/agenda-recorrente`)
    } else {
      GlobalCtx.setInformationsModal({
        title: 'E-MAIL NÃO ENCONTRADO',
        body: '<p>O E-mail digitado não corresponde a nenhum dos nossos resultados cadastrados no sistema. Verifique o e-mail inserido ou entre em contato conosco. </p>',
        type: 'warning'
      })
      GlobalCtx.toggleModalContainer('alert')
    }
  }

  const getTechnicals = () => {
    fetch(ENDPOINT, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        garagem: BRAVOX_TOKEN
      }
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === 'sucesso') {
          redirectLogin(resp.dados)
        }
      })
      .catch((err) => console.error(err))
  }

  const validateFields = () => {
    if (!validEmail(fieldEmail)) {
      !validEmail(fieldEmail) &&
        setFieldEmailError(
          'E-mail inválido. Por favor, insira um e-mail válido.'
        )
      fieldEmail === '' && setFieldEmailError('Campo obrigatório.')
    } else {
      getTechnicals()
    }
  }

  const sendInformations = (e) => {
    const key = e.keyCode

    if (key === 13) validateFields()
  }
  const createApi= (data) => {
    fetch(`${serverPath}/api/tecnical`, {method: 'POST',body:JSON.stringify(data),headers: new Headers({'Content-Type': 'application/json'})}).then((response) => console.log(""));
  }
  return (
    <Styles.LoginWrapper>
      <Styles.LoginContent>
        <Styles.LoginForm action="#" onKeyUp={(e) => sendInformations(e)}>
          <Styles.FormHeader>
            <Styles.FormHeaderTitle>
              Consultar solicitações de instalação
            </Styles.FormHeaderTitle>
          </Styles.FormHeader>
          <Styles.FormContent>
            <Styles.FormContentTitle>
              Por favor, insira abaixo o seu e-mail:
            </Styles.FormContentTitle>

            <Styles.FieldWrapper>
              <Styles.FormWrapperLabel htmlFor="form__email">
                E-mail
              </Styles.FormWrapperLabel>
              <Styles.FormWrapperInput
                type="email"
                id="form__email"
                onChange={(e) => changeEmailFied(e)}
              />
              <Styles.FormWrapperNotice className="form__email">
                {fieldEmailError}
              </Styles.FormWrapperNotice>
            </Styles.FieldWrapper>
            <Styles.FormFooter>
              <Styles.FormButtonBack
                type="button"
                onClick={() => returnHomeInitial()}
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} size="lg" />
                Voltar
              </Styles.FormButtonBack>
              <Styles.FormButtonContinue
                type="button"
                onClick={() => validateFields()}
              >
                Continuar
                <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
              </Styles.FormButtonContinue>
            </Styles.FormFooter>
          </Styles.FormContent>
        </Styles.LoginForm>
      </Styles.LoginContent>
    </Styles.LoginWrapper>
  )
}

export default LoginTechical
