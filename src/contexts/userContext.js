import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import MyAppointmentsContextProvider from './myAppointmentsContext'
import USER_CONSTANTS from 'constants/user'
import jwt from 'jsonwebtoken'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState('')
  const [appointmentCancelForUser, setAppointmentCancelForUser] = useState(null)
  const [appointmentForReviewOrder, setAppointmentForReviewOrder] = useState([])

  useEffect(() => {
    const token = Cookies.get(USER_CONSTANTS.COOKIE_JWT)

    if (token) {
      const validateUser = jwt.verify(
        token,
        process.env.KEY_SECRET_JWT_EXTBRAVOX
      )

      if (validateUser !== null) {
        setUserLogged(token)
      }
    }
  }, [])

  const setUserInfo = async (id, permission = 0) => {
    //Aqui entra o JWT salvo direto nos cookies e no set da alicação salvo os usos
    const user = JSON.stringify({
      id: id,
      permission: permission
    })

    await fetch('/api/user/login', {
      method: 'POST',
      headers: new Headers(),
      body: user
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          Cookies.set(USER_CONSTANTS.COOKIE_JWT, data.token, { expires: 7 })
          setUserLogged(data.token)
        }
      })
    return 'complete'
  }

  const destroyeruser = () => {
    Cookies.remove(USER_CONSTANTS.COOKIE_JWT)
    setUserLogged('')
  }

  const setAppointmentForCancel = (idCanceled) => {
    setAppointmentCancelForUser(idCanceled)
  }
  const setAppointmentForReview = (order) => {
    setAppointmentForReviewOrder(order)
  }

  const StateUser = {
    userLogged,
    setUserInfo,
    destroyeruser,
    setAppointmentForCancel,
    setAppointmentForReview,
    appointmentForReviewOrder,
    appointmentCancelForUser
  }

  return (
    <UserContext.Provider value={StateUser}>
      <MyAppointmentsContextProvider>{children}</MyAppointmentsContextProvider>
    </UserContext.Provider>
  )
}

export default UserContextProvider
