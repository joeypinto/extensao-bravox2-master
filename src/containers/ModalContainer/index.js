import { useContext, useEffect, useCallback } from 'react'
import { GlobalContext } from 'contexts/globalContext'
import * as Styles from './styles'

const ModalContainer = ({ children, isOpen }) => {
  const ctxGlobal = useContext(GlobalContext)

  const escModal = useCallback((event) => {
    const key = event.keyCode
    if (key === 27) ctxGlobal.toggleModalContainer('init')
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escModal, false)

    return () => {
      window.addEventListener('load', function () {
        document.removeEventListener('keydown', escModal, false)
      })
    }
  }, [])

  return (
    <Styles.Wrapper role="dialog" className={isOpen && 'isOpen'}>
      {children}
    </Styles.Wrapper>
  )
}

export default ModalContainer
