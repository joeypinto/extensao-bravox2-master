import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import FooterColumnBottom from './FooterColumnBottom'
import FooterColumnTop from './FooterColumnTop'
import * as Styles from './styles'
import { LINKS_FOOTER } from 'constants/globals'

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.FooterContent>
        {LINKS_FOOTER.map((session) => {
          if (session.name === 'footer_top') {
            return (
              <Styles.FooterTop key={session.id}>
                {session.columns.map((column) => {
                  return <FooterColumnTop key={column.id} columnInfo={column} />
                })}
              </Styles.FooterTop>
            )
          } else {
            return (
              <Styles.FooterBottom key={session.id}>
                {session.columns.map((column) => {
                  return (
                    <FooterColumnBottom key={column.id} columnInfo={column} />
                  )
                })}
              </Styles.FooterBottom>
            )
          }
        })}
      </Styles.FooterContent>
    </Styles.Footer>
  )
}

export default Footer
