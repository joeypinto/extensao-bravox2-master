import { useContext } from 'react'
import * as Styles from './style'
import Button from 'components/Button'
import ModalModifyOrder from 'components/ModalModifyOrder'
import { GlobalContext } from 'contexts/globalContext'
import { SchedulingContext } from 'contexts/schedulingContext'
import { PERIODS } from 'constants/globals'
import { findStatusShow } from 'utils'

const MaintenanceInstallationCard = ({ data }) => {
  const ctxGlobal = useContext(GlobalContext)
  const ctxScheduling = useContext(SchedulingContext)

  const openModal = (id, date, period) => {
    ctxScheduling.saveInfoOrderModify(id, date, period)
    ctxGlobal.toggleModalContainer('modifyOrder')
  }

  const formatedDate = (date) => {
    const dataFormated = new Date(date.replace(/-/gi, '/'))

    return `${dataFormated.getDate()}/${
      dataFormated.getMonth() + 1
    }/${dataFormated.getFullYear()}`
  }

  return (
    <>
      <ModalModifyOrder />
      {data.map((service, index) => {
        return (
          <Styles.MaintenanceInstallationWrapper
            key={`${service.purchaseNumber}#${index}`}
          >
            <Styles.MaintenanceInstallationList>
              <Styles.MaintenanceInstallationListItem>
                <Styles.MaintenanceInfo>
                  <Styles.MaintenaceInfoContent>
                    <Styles.MaintenaceItemInfoContent>
                      <Styles.MaintenaceItemInfoContentText>
                        <b>N° do pedido: </b> {service.purchaseNumber}
                      </Styles.MaintenaceItemInfoContentText>
                    </Styles.MaintenaceItemInfoContent>
                    <Styles.MaintenaceItemInfoContent>
                      <Styles.MaintenaceItemInfoContentText>
                        <b>Nome: </b> {service.name}
                      </Styles.MaintenaceItemInfoContentText>
                    </Styles.MaintenaceItemInfoContent>
                    <Styles.MaintenaceItemInfoContent>
                      <Styles.MaintenaceItemInfoContentText>
                        <b>Período: </b> {PERIODS[service.period].label}
                      </Styles.MaintenaceItemInfoContentText>
                    </Styles.MaintenaceItemInfoContent>
                    <Styles.MaintenaceItemInfoContent>
                      <Styles.MaintenaceItemInfoContentText>
                        <b>Data: </b> {formatedDate(service.date)}
                      </Styles.MaintenaceItemInfoContentText>
                    </Styles.MaintenaceItemInfoContent>
                  </Styles.MaintenaceInfoContent>
                  <Styles.MaintenaceInfoContent>
                    <Styles.MaintenaceItemInfoContent>
                      <Styles.MaintenaceItemInfoContentText className="stateOrder">
                        <b>Status: </b>
                        <span
                          className={
                            service.status === 'pendenting' && 'isPendenting'
                          }
                        >
                          {findStatusShow(service.status)}
                        </span>
                      </Styles.MaintenaceItemInfoContentText>
                    </Styles.MaintenaceItemInfoContent>
                  </Styles.MaintenaceInfoContent>
                </Styles.MaintenanceInfo>

                <Styles.MaintenanceInstallationTable>
                  <thead>
                    <Styles.MaintenanceInstallationTr>
                      <Styles.MaintenanceInstallationTh>
                        Nome
                      </Styles.MaintenanceInstallationTh>
                      <Styles.MaintenanceInstallationTh>
                        Quantidade
                      </Styles.MaintenanceInstallationTh>
                    </Styles.MaintenanceInstallationTr>
                  </thead>
                  <tbody>
                    {service.products.map((product, indexLine) => {
                      return (
                        <Styles.MaintenanceInstallationTr
                          key={`${service.purchaseNumber}/${product.name}-${indexLine}`}
                        >
                          <Styles.MaintenanceInstallationTd>
                            {/* <Styles.MaintenanceInstallationImage
                              src={product.imageProduct}
                              alt={`Imagem do produto: ${product.name}`}
                            /> */}
                            {product.name}
                          </Styles.MaintenanceInstallationTd>
                          <Styles.MaintenanceInstallationTd>
                            <b>{product.amount}</b>
                          </Styles.MaintenanceInstallationTd>
                        </Styles.MaintenanceInstallationTr>
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <Styles.MaintenanceInstallationTr center>
                      <Styles.MaintenanceInstallationTd
                        className="table__foot"
                        colSpan="2"
                      >
                        <Button
                          type="button"
                          text="Editar"
                          onClick={() =>
                            openModal(
                              service.purchaseNumber,
                              service.date,
                              service.period
                            )
                          }
                        />
                      </Styles.MaintenanceInstallationTd>
                    </Styles.MaintenanceInstallationTr>
                  </tfoot>
                </Styles.MaintenanceInstallationTable>
              </Styles.MaintenanceInstallationListItem>
            </Styles.MaintenanceInstallationList>
          </Styles.MaintenanceInstallationWrapper>
        )
      })}
    </>
  )
}

export default MaintenanceInstallationCard
