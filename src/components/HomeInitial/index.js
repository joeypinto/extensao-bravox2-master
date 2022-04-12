import { useContext } from 'react'
import { GlobalContext } from 'contexts/globalContext'
import * as Styles from './styles'

const HomeInitial = () => {
  const ctxGlobal = useContext(GlobalContext)
  return (
    <Styles.HomeWrapper>
      <Styles.LoginButtonTechnical
        onClick={() => ctxGlobal.changeProfile('technical')}
      >
        Logar como Técnico
      </Styles.LoginButtonTechnical>
      <Styles.LoginButtonUser onClick={() => ctxGlobal.changeProfile('user')}>
        Logar como Usuário
      </Styles.LoginButtonUser>
    </Styles.HomeWrapper>
  )
}

export default HomeInitial
