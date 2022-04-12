import UserTemplate from 'templates/UserTemplate'
import UserContainer from 'containers/UserContainer'
import ScheduleTechnicalContainer from 'containers/ScheduleTechnicalContainer'
import SchedulingContextProvider from 'contexts/schedulingContext'
import MenuTechnical from 'components/Menu/MenuTechnical'
import jwt from 'jsonwebtoken'

const RecurringSchedule = (props) => {
  return (
    <UserTemplate
      headers={{
        title: 'Oficinas credenciadas | BRAVOX',
        description:
          'Acesso inicial realizado pelas oficinas credenciadas no sistema',
        userId: props.idTechnical
      }}
    >
      <UserContainer
        menu={<MenuTechnical pageCurrency="RecurringScheduleTecnical" />}
        title="Planeje sua agenda"
        body={
          <SchedulingContextProvider >
            <ScheduleTechnicalContainer value={{idTechnical: props.idTechnical}}/>
          </SchedulingContextProvider>
        }
      />
    </UserTemplate>
  )
}

export async function getServerSideProps(context) {

  const infoUser =
    context.req.headers.cookie != undefined
      ? jwt.decode(context.req.headers.cookie.split('=')[1])
      : null
  const idTechnical = infoUser !== null ? parseInt(infoUser.idUser) : undefined

  if (idTechnical === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return {
    props: {
      idTechnical: idTechnical
    }
  }
}

export default RecurringSchedule
