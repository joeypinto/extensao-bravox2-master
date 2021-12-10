import Link from 'next/link'
import Head from 'next/head'
import * as Styles from './styles'

function PageError() {
  return (
    <>
      <Head>
        <title>Página Não Encontrada</title>
      </Head>
      <Styles.Wrapper>
        <Styles.ImageContent>
          <Styles.Title>404</Styles.Title>
        </Styles.ImageContent>
        <Styles.ContentInfo>
          <Styles.TitleInfo>Oops!</Styles.TitleInfo>
          <Styles.BodyInfo>Essa página não foi encontrada.</Styles.BodyInfo>
          <Link href="/" passHref>
            <Styles.LinkReturn>Voltar</Styles.LinkReturn>
          </Link>
        </Styles.ContentInfo>
      </Styles.Wrapper>
    </>
  )
}

export default PageError
