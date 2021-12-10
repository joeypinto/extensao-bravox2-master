import { useEffect, useContext } from 'react'
import { GlobalContext } from 'contexts/globalContext'
import { UserContext } from 'contexts/userContext'
import { useRouter } from 'next/dist/client/router'
import HomeInitial from 'components/HomeInitial'
import LoginUser from 'components/Login/LoginUser'
import LoginTecnical from 'components/Login/LoginTecnical'
import jwt from 'jsonwebtoken'

import * as Styles from './styles'

const AcessAuthetication = () => {
  const ctxGlobal = useContext(GlobalContext)
  const UserCtx = useContext(UserContext)
  const userInfoJWT = jwt.decode(UserCtx.userLogged)
  const router = useRouter()

  useEffect(() => {
    if (userInfoJWT !== null) {
      if (router.asPath === '/') {
        if (userInfoJWT.permissionUser === 1) {
          router.push(`/oficinas-credenciadas/agenda-recorrente`)
        } else {
          ctxGlobal.changeProfile('user')
        }
      }
    } else {
      const profile = router.query ? router.query.profile : false

      if (profile) {
        if (profile === 'client') {
          ctxGlobal.changeProfile('user')
        } else {
          ctxGlobal.changeProfile('technical')
        }
      }
    }
  }, [])

  return (
    <Styles.LoginWrapper>
      <Styles.LoginContent>
        {ctxGlobal.isAuthenticated === 'initial' ? (
          <>
            <Styles.LoginHeaderMain>Bem-vindo(a)</Styles.LoginHeaderMain>
            <Styles.LoginTextMain>
              Por favor, selecione o seu perfil abaixo para acessar o sistema:{' '}
            </Styles.LoginTextMain>
            <HomeInitial />
          </>
        ) : ctxGlobal.isAuthenticated === 'user' ? (
          <LoginUser />
        ) : (
          <LoginTecnical />
        )}
      </Styles.LoginContent>
    </Styles.LoginWrapper>
  )
}

export default AcessAuthetication
