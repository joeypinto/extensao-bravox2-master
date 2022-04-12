import { PERIODS } from 'constants/globals'
import { ConfirmInstallationContext } from 'contexts/confirmInstallationsContext'
import { GlobalContext } from 'contexts/globalContext'
import { useContext } from 'react'
import { formatedDateShow } from 'utils'
import * as Styles from './styles'

const ConfirmInstallationItem = ({ data }) => {
  const ctxGlobal = useContext(GlobalContext)
  const ctxConfirm = useContext(ConfirmInstallationContext)

  const openModalConfirminstallation = () => {
    ctxGlobal.toggleModalContainer('confirmedInstallation')
    ctxConfirm.setOrderCurrency(data)
  }

  return (
    <Styles.ConfirmInstallationWrapper>
      <Styles.ConfirmInstallationInfoWrapper>
        <Styles.ConfirmInstallationInfo>
          <Styles.TextNormal>
            <Styles.TextBold>Nº pedido: </Styles.TextBold>
            {String(data.idTray).padStart(7, '0')}
          </Styles.TextNormal>
        </Styles.ConfirmInstallationInfo>
        <Styles.ConfirmInstallationInfo>
          <Styles.TextNormal>
            <Styles.TextBold>Nome: </Styles.TextBold>
            {data.name_client}
          </Styles.TextNormal>
        </Styles.ConfirmInstallationInfo>
        <Styles.ConfirmInstallationInfo>
          <Styles.TextNormal>
            <Styles.TextBold>Período: </Styles.TextBold>{' '}
            {PERIODS[data.period].label}
          </Styles.TextNormal>
        </Styles.ConfirmInstallationInfo>
        <Styles.ConfirmInstallationInfo>
          <Styles.TextNormal>
            <Styles.TextBold>Data: </Styles.TextBold>
            {formatedDateShow(data.dateChance)}
          </Styles.TextNormal>
        </Styles.ConfirmInstallationInfo>
      </Styles.ConfirmInstallationInfoWrapper>
      <Styles.ConfirmInstallationButtonContent>
        <Styles.ConfirmInstallationButton
          type="button"
          onClick={() => {
            openModalConfirminstallation()
          }}
        >
          Concluir
        </Styles.ConfirmInstallationButton>
      </Styles.ConfirmInstallationButtonContent>
    </Styles.ConfirmInstallationWrapper>
  )
}

export default ConfirmInstallationItem
