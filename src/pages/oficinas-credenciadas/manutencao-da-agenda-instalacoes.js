import React from 'react'
import UserTemplate from 'templates/UserTemplate'
import UserContainer from 'containers/UserContainer'
import MaintenanceInstallationContainer from 'containers/MaintenanceInstallationContainer'
import SchedulingContextProvider from 'contexts/schedulingContext'
import MenuTechnical from 'components/Menu/MenuTechnical'
import { PAGINATION_AMOUNT } from 'constants/globals'
import { TECHNICAL_SERVICES_SCHEDULES } from 'constants/temporary'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import { serverPath } from './../../utils/index';

const MaintenanceScheduleInstallation = (props) => {
  const router = useRouter()
  const queryPage = router.query.page ? router.query.page : 1
  const searchKey = router.query.search ? router.query.search : undefined

  props.pagination.currencyPage = queryPage
  props.pagination.searchWord = searchKey

  const initialData = queryPage * PAGINATION_AMOUNT - PAGINATION_AMOUNT
  const finalData = queryPage * PAGINATION_AMOUNT - 1

  const dataFiltered = props.data.filter((item, index) => {
    return initialData <= index && index <= finalData
  })

  return (
    <UserTemplate
      headers={{
        title: 'Agenda de instalações | BRAVOX',
        description:
          'Acesso inicial realizado pelas oficinas credenciadas no sistema',
        userId: props.idTech
      }}
    >
      <UserContainer
        menu={<MenuTechnical pageCurrency="MaintenanceInstallationContainer" />}
        title="Agendamentos"
        body={
          <SchedulingContextProvider>

            <MaintenanceInstallationContainer
              data={dataFiltered}
              pagination={props.pagination}
              typeRef={props.typePagination}
              value={{idTechnical: props.idTech}}
            />
          </SchedulingContextProvider>
        }
      />
    </UserTemplate>
  )
}

export default MaintenanceScheduleInstallation

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

  //Requisição da API interna para pegar os pedidos relacionados ao técnico
  //Usando o idAcima pode ser filtrado no retorno ou fazer a pesquisa e retorno o array certinho caso nao seja undefined

  if(!context.query.search){
    var list = await fetch(`${serverPath}/api/maintenance/?idTechnical=${idTechnical}`, {method: 'GET'});
    var TECHNICAL_SERVICES_SCHEDULES =  await list.json()
  }else{
    var list = await fetch(`${serverPath}/api/maintenance/?idTechnical=${idTechnical}&search=${context.query.search}`, {method: 'GET'});
    var TECHNICAL_SERVICES_SCHEDULES =  await list.json()
  }

  if (!TECHNICAL_SERVICES_SCHEDULES) {
    return {
      notFound: true,
    }
  }
 
  const returnAPIOrders = TECHNICAL_SERVICES_SCHEDULES.filter((order) => {
    return order.idTechnical === idTechnical
  })

  // depois envia com as partes de pagination e dada

  return {
    props: {
      idTech: idTechnical,
      data: returnAPIOrders,
      typePagination: 'query',
      pagination: {
        amountpages: Math.ceil(returnAPIOrders.length / PAGINATION_AMOUNT),
        prefixUrl: 'manutencao-da-agenda-instalacoes'
      }
    }
  }
}
