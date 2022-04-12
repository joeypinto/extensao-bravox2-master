import * as Styles from './styles'

const Loading = () => {
  return (
    <Styles.LoadingWrapper>
      <Styles.LoadingTitle>Carregando</Styles.LoadingTitle>
      <Styles.CircleWrapper>
        {Array(3)
          .fill(null)
          .map((element, index) => {
            return <Styles.CircleAnimation key={index} role="img" />
          })}
      </Styles.CircleWrapper>
    </Styles.LoadingWrapper>
  )
}

export default Loading
