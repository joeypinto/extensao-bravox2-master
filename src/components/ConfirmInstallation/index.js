import ConfirmInstallationItem from './ConfirmInstallationItem'
import ModalConfirmInstallation from './ModalConfirmInstallation'
import * as Styles from './styles'

const ConfirmInstallation = ({ list }) => {
  return (
    <>
      <ModalConfirmInstallation />

      <Styles.ConfirmInstallationList>
        {list.length > 0 &&
          list.map((order) => (
            <ConfirmInstallationItem key={order.idTray} data={order} />
          ))}
      </Styles.ConfirmInstallationList>
    </>
  )
}

export default ConfirmInstallation
