import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { SHIMMER, TOBASE64 } from 'constants/globals'
import * as Styles from './styles'

const Header = ({ children }) => {
  
  return (
    <Styles.Header>
      <Styles.Nav>
        <Styles.LinkLogoHeader href="/">
          <Styles.Imageheader
            src="/images/logo.png"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${TOBASE64(
              SHIMMER(700, 475)
            )}`}
            alt="Logo do bravox"
            layout="fill"
          />
        </Styles.LinkLogoHeader>
        {children}
        <Styles.UserAndLinkContent>
          <Link href="https://www.bravox.com.br/" passHref>
            <Styles.LinkHeader>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
              VOLTAR PARA A LOJA
            </Styles.LinkHeader>
          </Link>
        </Styles.UserAndLinkContent>
      </Styles.Nav>
    </Styles.Header>
  )
}

export default Header
