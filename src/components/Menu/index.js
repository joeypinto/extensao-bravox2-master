import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'

function Menu({ titleMenu, linksMenu, pageCurrency }) {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styles.MenuWrapper>
      <Styles.ButtonToogleMenu onClick={() => openMenu()}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </Styles.ButtonToogleMenu>
      <Styles.TitleMenu className={isOpen && 'is__open'}>
        {titleMenu}
      </Styles.TitleMenu>
      <Styles.NavWrapper className={isOpen && 'is__open'}>
        <Styles.ListItems>
          {linksMenu.length > 0 &&
            linksMenu.map((itemMenu) => {
              return (
                <li className="menuItem" key={`#menu-${itemMenu.link}`}>
                  <Link href={itemMenu.link} passHref>
                    <a
                      className={`menuItem__link ${
                        pageCurrency === itemMenu.slug && 'is__active'
                      }`}
                    >
                      {itemMenu.label}
                    </a>
                  </Link>
                </li>
              )
            })}
        </Styles.ListItems>
      </Styles.NavWrapper>
    </Styles.MenuWrapper>
  )
}

export default Menu
