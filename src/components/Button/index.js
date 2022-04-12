import * as Styles from './styles'

const Button = (props) => {
  return <Styles.Button {...props}>{props.text}</Styles.Button>
}

export default Button
