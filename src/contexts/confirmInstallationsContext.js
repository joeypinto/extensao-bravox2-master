import { createContext, useState } from 'react'

export const ConfirmInstallationContext = createContext()

const ConfirmInstallationProvider = ({ children }) => {
  const [orderSelected, setOrderSelected] = useState({})

  const setOrderCurrency = (data, action = 'set') => {
    if (action === 'set') {
      setOrderSelected(data)
    } else {
      setOrderSelected({})
    }
  }

  const confirmInstallationValues = {
    orderSelected,
    setOrderCurrency
  }

  return (
    <ConfirmInstallationContext.Provider value={confirmInstallationValues}>
      {children}
    </ConfirmInstallationContext.Provider>
  )
}

export default ConfirmInstallationProvider
