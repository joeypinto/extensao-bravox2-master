import { createContext, useState } from 'react'

export const MyAppointmentsContext = createContext()

const MyAppointmentsContextProvider = ({ children }) => {
  const [keyWordSearch, setKeyWordSearch] = useState('')

  const changeSetKeyWord = (searchWord) => {
    let word = String(searchWord)
    if (word.trim()) {
      setKeyWordSearch(word.trim())
    }
  }

  const StateMyAppointments = {
    keyWordSearch,
    changeSetKeyWord
  }

  return (
    <MyAppointmentsContext.Provider value={StateMyAppointments}>
      {children}
    </MyAppointmentsContext.Provider>
  )
}

export default MyAppointmentsContextProvider
