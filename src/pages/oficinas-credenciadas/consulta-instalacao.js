import { useRouter } from 'next/router'
import { PAGINATION_AMOUNT } from 'constants/globals'
import { ConsultInstallationProvider } from 'contexts/consultInstallationContext'
import UserContainer from 'containers/UserContainer'
import ConsultInstallationContainer from 'containers/ConsultInstallationContainer'
import MenuTechnical from 'components/Menu/MenuTechnical'
import UserTemplate from 'templates/UserTemplate'
import jwt from 'jsonwebtoken'
import { serverPath } from './../../utils/index';

const ConsultInstallation = (props) => {
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
        title: 'Consulta de Instalações Realizadas | BRAVOX',
        description: '',
        userId: props.idTechnical
      }}
    >
      <UserContainer
        menu={<MenuTechnical pageCurrency="ConsultInstallationSuccess" />}
        title="Consulta de Instalações Realizadas"
        body={
          <ConsultInstallationProvider>
            <ConsultInstallationContainer
              data={dataFiltered}
              pagination={props.pagination}
              typeRef={props.typePagination}

            />
          </ConsultInstallationProvider>
        }
      />
    </UserTemplate>
  )
}

export default ConsultInstallation

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
  var list = await fetch(`${serverPath}/api/reviews/?idTechnical=${idTechnical}`, {method: 'GET'});
  var REVIEWS_TECHNICAL =  await list.json()
}else{
  var list = await fetch(`${serverPath}/api/reviews/?idTechnical=${idTechnical}&search=${context.query.search}`, {method: 'GET'});
  var REVIEWS_TECHNICAL =  await list.json()
}


//Aqui busca por id para mandar para a página

  return {
    props: {
      idTechnical: idTechnical,
      typePagination: 'query',
      data: REVIEWS_TECHNICAL, //Vem da API
      pagination: {
        amountpages: Math.ceil(REVIEWS_TECHNICAL.length / PAGINATION_AMOUNT),
        prefixUrl: 'consulta-instalacao'
      }
    }
  }
}
