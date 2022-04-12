import UserTemplate from 'templates/UserTemplate'
import AccessAuthentication from 'containers/AccessAuthentication'

export default function Home() {
  return (
    <>
      <UserTemplate
        headers={{
          title: 'Bravox | Bem-vindo',
          description:
            'Faça seu login para poder acessar a página de instalação'
        }}
      >
        <AccessAuthentication />
      </UserTemplate>
    </>
  )
}
