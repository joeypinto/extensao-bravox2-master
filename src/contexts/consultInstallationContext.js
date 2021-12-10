import { createContext } from 'react'

export const ConsultInstallationContext = createContext()

export const ConsultInstallationProvider = ({ children }) => {
  const providerValues = {}

  return (
    <ConsultInstallationContext.Provider value={providerValues}>
      {children}
    </ConsultInstallationContext.Provider>
  )
}
