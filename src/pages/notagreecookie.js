import UserTemplate from 'templates/UserTemplate'
import NotCookie from 'containers/NotCookie'

const NotAgreeCookie = () => {
  return (
    <UserTemplate
      headers={{
        title: 'Bravox | Bem Vindo!',
        description:
          'Esteja por dentro do uso de cookies para utilizar o serviço de instalação do Bravox.',
        userId: 0
      }}
    >
      <NotCookie />
    </UserTemplate>
  )
}

export default NotAgreeCookie
