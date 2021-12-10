import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { UserContext } from 'contexts/userContext'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Loading from 'components/Loading'
import MenuUser from 'components/Header/MenuUser'
import ModalLGPD from 'components/ModalLGPD'
import MenuHeaderTechnical from 'components/Header/MenuHeaderTechnical'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
import USER_CONSTANTS from 'constants/user'

const UserTemplate = ({ children, headers, userId = 0 }) => {
  const [isVisiblePage, setIsVisiblePage] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const router = useRouter()

  const displayPage = () => {
    setTimeout(() => {
      setIsVisiblePage(true)
    }, 800)
  }

  useEffect(() => {

    let user = jwt.decode(Cookies.get(USER_CONSTANTS.COOKIE_JWT))
    if (Cookies.get(USER_CONSTANTS.COOKIE_JWT)) {
      setUserInfo(user)
    }

    if (router.asPath == '/' || router.asPath == '/notagreecookie') {
      displayPage()
    } else {
      if (!user) {
        router.push('/')
        displayPage()
      }

      if (user != null) {
        displayPage()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NextSeo
        title={headers.title ? headers.title : 'Bravox'}
        description={
          headers.description !== '' || headers.description
            ? headers.description
            : ''
        }
      />
      {!isVisiblePage ? (
        <Loading />
      ) : (
        <>
          <Header>
            {userInfo !== null && (
              <>
                {userInfo.permissionUser === 0 ? (
                  <MenuUser />
                ) : (
                  <MenuHeaderTechnical />
                )
                }
              </>
            )}
          </Header>
          <ModalLGPD />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default UserTemplate
