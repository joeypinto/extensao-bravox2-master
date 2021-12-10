import UserTemplate from 'templates/UserTemplate'
import UserContainer from 'containers/UserContainer'
import MenuTechnical from 'components/Menu/MenuTechnical'
import MaintenanceTechnicalContainer from 'containers/MaintenanceTechnicalContainer'
import SchedulingMaintenceProvider from 'contexts/schedulingMaintenceContext'
import jwt from 'jsonwebtoken'

const MaintenanceTechnicalSchedule = (props) => {
  return (
    <UserTemplate
      headers={{
        title: 'Manutenção da agenda recorrente | BRAVOX',
        description: 'Área responsável pela alteração da agenda recorrente.',
        userId: props.idTechnical
      }}
    >
      <UserContainer
        menu={<MenuTechnical pageCurrency="MaintenanceTechnicalSchedule" />}
        title="Manutenção da agenda recorrente"
        body={
          <SchedulingMaintenceProvider>
            <MaintenanceTechnicalContainer value={{idTechnical: props.idTechnical}}/>
          </SchedulingMaintenceProvider>
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

export default MaintenanceTechnicalSchedule
