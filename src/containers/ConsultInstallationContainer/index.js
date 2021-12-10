import ConsultInstallationContent from 'components/ConsultInstallationContent'
import Pagination from 'components/Pagination'
import SearchItems from 'components/SearchItems'

const ConsultInstallationContainer = ({ data, pagination, typeRef }) => {
  return (
    <>
      <SearchItems preRoute={'/oficinas-credenciadas/consulta-instalacao'} />
      <ConsultInstallationContent dataList={data} />
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

export default ConsultInstallationContainer
