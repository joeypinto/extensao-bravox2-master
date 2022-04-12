import ConsultInstallationItem from './ConsultInstallationItem'
import * as Styles from './styles'

const ConsultInstallationContent = ({ dataList }) => {
  return (
    <Styles.WrapperReviews>
      {dataList &&
        dataList.map((review) => {
          return <ConsultInstallationItem key={review.idTray} data={review} />
        })}
    </Styles.WrapperReviews>
  )
}

export default ConsultInstallationContent
