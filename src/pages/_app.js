import { ThemeProvider } from 'styled-components'
import { themeDefault } from 'themes/themeDefault'
import NextNprogress from 'nextjs-progressbar'
import UserContextProvider from 'contexts/userContext'
import GlobalContextProvider from 'contexts/globalContext'
import ModalAlert from 'components/ModalAlert'
import GlobalStyle from 'shared/styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <NextNprogress
          color="#d4c073"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
          showSpinner={false}
        />

        <UserContextProvider>
          <GlobalContextProvider>
            <ModalAlert />
            <Component {...pageProps} />
          </GlobalContextProvider>
        </UserContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
