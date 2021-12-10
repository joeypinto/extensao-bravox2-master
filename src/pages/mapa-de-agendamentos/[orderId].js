import UserTemplate from 'templates/UserTemplate'
import MapContainer from 'containers/MapContainer'
import { serverPath } from './../../utils/index';

//Nessa página tem que entrar somente ORDERs que tem os seguintes estados
//Cancelado, null ou pendente
// Quando um valor vem até essa página ele segue tres lógicas
// Está com estado Null, cria no banco de dados o agendamento e adiciona como pendente
// se for cancelado ele atualiza como pendente de agendamento.
// se for pendente não precisa fazer lógica

const map = (props) => {
  return (
    <UserTemplate
      headers={{
        title: ` ${props.order[0].idTray}`,
        description:
          'Agende sua instalação através das assistências técnicas do mapa'
      }}
    >
      <MapContainer  orderId={props.order[0].idTray}/>
    </UserTemplate>
  )
}

export async function getServerSideProps({ params }) {
  var list = await fetch(`${serverPath}/api/orders/by_user/?orderByUser=${params.orderId}`, {method: 'GET'});
  const ordersByUser = await list.json()
  const order = ordersByUser.filter((order) => {
    return String(order.idTray) === params.orderId
  })
  return {
    props: {
      order
    },
  }
}




export default map
