import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'
import { findStatusShow } from 'utils'

const ConsultInstallationItem = ({ data }) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.TextNormal>
          <Styles.TextBold>Nº Pedido: </Styles.TextBold>
          {String(data.idTray).padStart(6, '0')}
        </Styles.TextNormal>
        <Styles.TextNormal>
          <Styles.TextBold>Status: </Styles.TextBold>
          <Styles.TextStatus
            className={data.status === 'completed' && 'isCompleted'}
          >
            {findStatusShow(data.status)}
          </Styles.TextStatus>
        </Styles.TextNormal>
      </Styles.Header>
      <Styles.ReviewContent>
        {Array(5)
          .fill(null)
          .map((review, index) => {
            return (
              <li
                key={`reviewNote#${index}`}
                className={
                  index + 1 <= data.review ? 'isActive' : 'isNotActive'
                }
              >
                <FontAwesomeIcon icon={faStar} size="lg" />
              </li>
            )
          })}
      </Styles.ReviewContent>
      <Styles.ReviewTextContent>
        <Styles.ReviewDescription>{data.description}</Styles.ReviewDescription>
      </Styles.ReviewTextContent>
    </Styles.Wrapper>
  )
}

export default ConsultInstallationItem
