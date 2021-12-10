import SearchItems from 'components/SearchItems'
import Pagination from 'components/Pagination'
import MaintenanceInstallationCard from 'components/MaintenanceInstallationCard'

const MaintenanceInstallationContainer = ({ data, pagination, typeRef }) => {
  return (
    <>
      <SearchItems
        preRoute={'/oficinas-credenciadas/manutencao-da-agenda-instalacoes'}
      />
      <MaintenanceInstallationCard data={data} />
      <Pagination
        amountpages={pagination.amountpages}
        currencyPage={pagination.currencyPage}
        prefixUrl={pagination.prefixUrl}
        searchWord={pagination.searchWord}
        typeRef={typeRef}
      />
    </>
  )
}

export default MaintenanceInstallationContainer
