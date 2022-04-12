import ConfirmInstallation from 'components/ConfirmInstallation'
import Pagination from 'components/Pagination'
import SearchItems from 'components/SearchItems'

const ConfirmInstallationContainer = ({ data, pagination, typeRef }) => {
  console.log(data)
  return (
    <>
      <SearchItems preRoute={'/oficinas-credenciadas/confirmar-instalacao'} />
      <ConfirmInstallation list={data} />
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

export default ConfirmInstallationContainer
