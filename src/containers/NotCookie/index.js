import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookie, faCookieBite } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'

const NotCookie = () => {
  const [agreeCookies, setAgreeCookies] = useState('init')
  const [cookieIconAgree, setCookieIconAgree] = useState(false)
  const route = useRouter()
  let icon = cookieIconAgree ? faCookieBite : faCookie

  useEffect(() => {
    let agreeLGPD = localStorage.getItem('LGPD')

    if (agreeLGPD !== null && agreeLGPD) {
      setAgreeCookies(agreeLGPD)
    }
  }, [])

  useEffect(() => {
    if (agreeCookies === 'yes') {
      localStorage.setItem('LGPD', 'yes')
      route.push('/')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreeCookies])

  return (
    <Styles.MainWrapper>
      <Styles.WrapperHeader>
        <FontAwesomeIcon icon={icon} size="9x" />
        <h1 className="header__title">Utilização de Cookies</h1>
      </Styles.WrapperHeader>
      <Styles.WrapperContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo pariatur a
        hic cum eum, alias, repudiandae dolorum facilis voluptatem dolore eius
        laboriosam dolor molestias accusamus! Officiis tempore minima assumenda
        eaque?
      </Styles.WrapperContent>
      <Styles.ContentButtons>
        <Styles.WrapperButton
          type="button"
          onClick={() => {
            setCookieIconAgree(true)

            setTimeout(() => {
              setAgreeCookies('yes')
            }, 1200)
          }}
        >
          Hum, Concordo
        </Styles.WrapperButton>
      </Styles.ContentButtons>
    </Styles.MainWrapper>
  )
}

export default NotCookie
