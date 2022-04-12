import { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = ({ children, ...res }) => {
  // initial, technical and user
  const [isAuthenticated, setIsAuthenticated] = useState('initial')
  //cancel, review, tecnical, alert, modifyOrder, confirmedInstallation ou init
  const [isToggleModal, setToogleModal] = useState('init')
  const [infoModal, setInfoModal] = useState({
    title: 'Bravox',
    body: '<p>Seja Bem-vindo!</p>',
    type: 'default'
  })

  const changeProfile = (screen) => {
    setIsAuthenticated(screen)
  }
  const toggleModalContainer = (type) => {
    setToogleModal(type)
  }

  const setInformationsModal = (info) => {
    setInfoModal({
      title: info.title,
      body: info.body,
      type: info.type
    })
  }

  const Global = {
    infoModal,
    isAuthenticated,
    isToggleModal,
    setInformationsModal,
    changeProfile,
    toggleModalContainer,
    setInformationsModal
  }

  return (
    <GlobalContext.Provider value={Global}>{children}</GlobalContext.Provider>
  )
}

export default GlobalContextProvider
