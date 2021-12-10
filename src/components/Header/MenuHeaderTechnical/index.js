import { useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from 'contexts/userContext'
import * as Styles from './styles'

const MenuHeaderTechnical = () => {
  const ctxuser = useContext(UserContext)
  const Router = useRouter()

  const loggout = () => {
    ctxuser.destroyeruser()
    Router.push({
      pathname: '/',
      query: { profile: 'technical' }
    })
  }

  return (
    <Styles.NavTechnicalWrapper>
      <Styles.NavListMenu>
        <Styles.MenuItem>
          <Styles.LogoutAccount
            onClick={() => {
              loggout()
            }}
          >
            Sair
          </Styles.LogoutAccount>
        </Styles.MenuItem>
      </Styles.NavListMenu>
    </Styles.NavTechnicalWrapper>
  )
}

export default MenuHeaderTechnical
