import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faExclamationCircle,
  faCheckCircle,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from 'contexts/globalContext'
import ModalContainer from 'containers/ModalContainer'
import * as Styles from './styles'

const ModalAlert = () => {
  const contextGlobal = useContext(GlobalContext)

  const typeIcons = {
    error: faTimes,
    warning: faExclamationCircle,
    success: faCheckCircle,
    default: faVolumeUp
  }

  return (
    <ModalContainer isOpen={contextGlobal.isToggleModal === 'alert' && true}>
      <Styles.ModalContent
        role="document"
        className={
          contextGlobal.infoModal.type === undefined
            ? 'default'
            : contextGlobal.infoModal.type
        }
      >
        <Styles.ModalWrapper>
          <Styles.ModalHeader>
            <Styles.ModalHeaderTitle>
              {contextGlobal.infoModal.title}
            </Styles.ModalHeaderTitle>
            <Styles.ModalHeaderButton
              type="button"
              onClick={() => {
                contextGlobal.toggleModalContainer('init')
              }}
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </Styles.ModalHeaderButton>
          </Styles.ModalHeader>
          <Styles.ModalBody
            dangerouslySetInnerHTML={{ __html: contextGlobal.infoModal.body }}
          />
          <Styles.ModalFooter>
            <Styles.ModalFooterText>Bravox</Styles.ModalFooterText>
          </Styles.ModalFooter>
        </Styles.ModalWrapper>

        <Styles.ModalSVG
          className={
            contextGlobal.infoModal.type === undefined
              ? 'default'
              : contextGlobal.infoModal.type
          }
        >
          {contextGlobal.infoModal.type !== '' && (
            <FontAwesomeIcon
              icon={typeIcons[contextGlobal.infoModal.type]}
              size="10x"
            />
          )}
        </Styles.ModalSVG>
      </Styles.ModalContent>
    </ModalContainer>
  )
}

export default ModalAlert
