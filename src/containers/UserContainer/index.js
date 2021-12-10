import * as Styles from './styles'

const UserContainer = ({ menu, title, body }) => {
  return (
    <Styles.ContainerWrapper>
      {menu}
      <Styles.ContentUser>
        <Styles.ContentTitle>{title}</Styles.ContentTitle>
        {body}
      </Styles.ContentUser>
    </Styles.ContainerWrapper>
  )
}

export default UserContainer
