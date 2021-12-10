import { useRouter } from 'next/router'
import { PAGINATION_AMOUNT } from 'constants/globals'
import UserTemplate from 'templates/UserTemplate'
import ConfirmInstallationProvider from 'contexts/confirmInstallationsContext'
import UserContainer from 'containers/UserContainer'
import ConfirmInstallationContainer from 'containers/ConfirmInstallationContainer'
import MenuTechnical from 'components/Menu/MenuTechnical'
import jwt from 'jsonwebtoken'
import { serverPath } from './../../utils/index';

const confirmInstallations = (props) => {
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
        title: 'Confirmar Instalações | BRAVOX',
        description: 'Confirme as instalações realizadas',
        userId: props.idTechnical
      }}
    >
      <UserContainer
        menu={<MenuTechnical pageCurrency="ConfirmInstallation" />}
        title={'Confirmação de instalações'}
        body={
          <ConfirmInstallationProvider>
            <ConfirmInstallationContainer
              data={dataFiltered}
              pagination={props.pagination}
              typeRef={props.typePagination}
            />
          </ConfirmInstallationProvider>
        }
      />
    </UserTemplate>
  )
}

export default confirmInstallations

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
if(!context.query.search){
  var list = await fetch(`${serverPath}/api/confirm_install/?idTechnical=${idTechnical}`, {method: 'GET'});
   var INSTALLATIONS_CONFIRMED_LIST =  await list.json()
}else{
  var list = await fetch(`${serverPath}/api/confirm_install/?idTechnical=${idTechnical}&search=${context.query.search}`, {method: 'GET'});
  var INSTALLATIONS_CONFIRMED_LIST =  await list.json()
}

  return {
    props: {
      idTechnical: idTechnical,
      typePagination: 'query',
      data: INSTALLATIONS_CONFIRMED_LIST, //Vem da API
      pagination: {
        amountpages: Math.ceil(
          INSTALLATIONS_CONFIRMED_LIST.length / PAGINATION_AMOUNT
        ),
        prefixUrl: 'confirmar-instalacao'
      }
    }
  }
}
