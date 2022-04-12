import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from 'contexts/userContext'
import jwt from 'jsonwebtoken'
import * as Styles from './styles'

const MenuUser = () => {
  const userContext = useContext(UserContext)
  const userJWT = jwt.decode(userContext.userLogged)
  const Router = useRouter()

  const loggout = () => {
    userContext.destroyeruser()
    Router.push({
      pathname: '/',
      query: { profile: 'client' }
    })
  }

  return (
    <>
      {userJWT !== null ? (
        <Styles.NavUser>
          <Styles.NavList>
            {userJWT.permissionUser === 0 ? (
              <li className="nav__item">
                <Link href={`/agendamentos`} passHref>
                  <Styles.NavLink>Meus Agendamentos</Styles.NavLink>
                </Link>
              </li>
            ) : (
              ''
            )}
            <li className="nav__item">
              <Styles.NavLoggout onClick={() => loggout()}>
                Sair
                <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
              </Styles.NavLoggout>
            </li>
          </Styles.NavList>
        </Styles.NavUser>
      ) : (
        ''
      )}
    </>
  )
}

export default MenuUser
