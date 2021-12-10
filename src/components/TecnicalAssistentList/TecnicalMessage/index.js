import * as Styles from './styles'

const TecnicalMessage = ({ title, children }) => {
  return (
    <Styles.MessageWrapper>
      <h2>{title}</h2>
      {children}
    </Styles.MessageWrapper>
  )
}

export default TecnicalMessage
