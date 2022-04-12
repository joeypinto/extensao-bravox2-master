import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MyAppointments from 'components/MyAppointments'
import Pagination from 'components/Pagination'
import SearchItems from 'components/SearchItems'
import { PAGINATION_AMOUNT } from 'constants/globals'

const MyAppointmentsContainer = ({ idUser, appointmentList, page }) => {
  const [searchWord, setSearchWord] = useState('')
  const [appointment, setAppointment] = useState([])
  const [appointmentsForPage, setAppointmentsForPage] = useState([])
  const route = useRouter()
  const { search } = route.query
  let pageStart = PAGINATION_AMOUNT * page - PAGINATION_AMOUNT
  let pageEnd = PAGINATION_AMOUNT * page - 1

  const validateAppointments = () => {
    let previewAppointment = appointment.filter((appointmentForUser, index) => {
      return index >= pageStart && index <= pageEnd
    })

    setAppointmentsForPage(previewAppointment)
  }

  useEffect(() => {
    setAppointment(appointmentList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    //usar await para puxar da api e salvar no state
    //Se mudar o search ele atualiza
    // Exemplo
    if (search && search !== '') {
      setSearchWord(search)
      setAppointment([
        {
          id: 1,
          userId: 355102,
          dateChance: '2021-8-21',
          period: 'morning',
          status: 'completed',
          review: null
        }
      ])
    } else {
      setAppointment(appointmentList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  useEffect(() => {
    validateAppointments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointment])

  return (
    <>
      <SearchItems preRoute={`/agendamentos`} />
      <MyAppointments appointmentsCurrency={appointmentsForPage} />
      <Pagination
        amountpages={Math.ceil(appointment.length / PAGINATION_AMOUNT)}
        currencyPage={parseInt(page)}
        prefixUrl={`/agendamentos`}
        searchWord={searchWord}
      />
    </>
  )
}

export default MyAppointmentsContainer
