import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCookieBite, faCookie } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'

const ModalLGPD = () => {
  const [isAgreeLGPD, setIsAgreeLGPD] = useState('loading')
  const [cookieAgree, setCookieAgree] = useState(false)
  let icon = cookieAgree ? faCookieBite : faCookie
  const route = useRouter()
  const path = route.asPath === '/notagreecookie'

  useEffect(() => {
    let agreeLGPD = localStorage.getItem('LGPD')

    if (agreeLGPD === null || agreeLGPD === 'loading') {
      localStorage.setItem('LGPD', 'init')
      setIsAgreeLGPD(agreeLGPD)
    } else {
      setIsAgreeLGPD(agreeLGPD)
      if (agreeLGPD === 'reject') {
        route.push('/notagreecookie')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let agreeLGPD = localStorage.getItem('LGPD')

    if (agreeLGPD !== null && isAgreeLGPD !== 'loading') {
      localStorage.setItem('LGPD', isAgreeLGPD)
    }
  }, [isAgreeLGPD])

  return (
    <>
      {isAgreeLGPD !== 'yes' && isAgreeLGPD !== 'loading' && !path ? (
        <Styles.DialogLGPD
          className={isAgreeLGPD !== 'yes' && 'is_visible'}
          role="dialog"
        >
          <Styles.WrapperModalLGPD role="document">
            <FontAwesomeIcon icon={icon} size="8x" />
            <Styles.HeaderModalLGPD>
              <h3 className="header__title">Usamos Cookies</h3>
            </Styles.HeaderModalLGPD>
            <Styles.ContentModalLGPD>
              Nós utilizamos cookies para garantir uma melhor experiência a você
              no nosso site.
            </Styles.ContentModalLGPD>
            <Styles.ContentButtonLGPD>
              <Styles.ButtonModalLGPD
                type="button"
                onClick={() => {
                  setCookieAgree(true)
                  setTimeout(() => {
                    setIsAgreeLGPD('yes')
                  }, 1300)
                }}
              >
                Concordo
              </Styles.ButtonModalLGPD>
              <Styles.ButtonModalLGPD
                type="button"
                onClick={() => {
                  setIsAgreeLGPD('reject')
                  setTimeout(() => {
                    route.push('/notagreecookie')
                  }, 1000)
                }}
              >
                Não Concordo
              </Styles.ButtonModalLGPD>
            </Styles.ContentButtonLGPD>
          </Styles.WrapperModalLGPD>
        </Styles.DialogLGPD>
      ) : (
        <></>
      )}
    </>
  )
}

export default ModalLGPD
