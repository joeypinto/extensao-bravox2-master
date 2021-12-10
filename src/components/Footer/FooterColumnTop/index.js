import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Styles from './styles'
import { validateLengthObject } from 'utils'

const FooterColumnTop = ({ columnInfo }) => {
  const validateRenderItem = (linkItem) => {
    if (validateLengthObject(linkItem.exclused)) {
      if (linkItem.exclused.type === 'contact') {
        return (
          <Styles.ListItemSupport>
            <Styles.SVGContent>
              <FontAwesomeIcon icon={linkItem.exclused.icon} size="lg" />
            </Styles.SVGContent>
            <Styles.SuppertText>
              {linkItem.exclused.text}
              <Styles.SuppertTarget>
                {linkItem.exclused.textTarget}
              </Styles.SuppertTarget>
            </Styles.SuppertText>
          </Styles.ListItemSupport>
        )
      } else {
        return (
          <Link href={linkItem.link} passHref>
            <Styles.ListItemLinkPhone>
              {linkItem.label}
            </Styles.ListItemLinkPhone>
          </Link>
        )
      }
    } else if (linkItem.link) {
      return (
        <Link href={linkItem.link} passHref>
          <Styles.ListItemLink>{linkItem.label}</Styles.ListItemLink>
        </Link>
      )
    } else {
      return (
        <Styles.ItemContentText
          dangerouslySetInnerHTML={{ __html: `${linkItem.label}` }}
        ></Styles.ItemContentText>
      )
    }
  }

  return (
    <Styles.FooterListItem>
      <Styles.FooterListItemTitle>
        {columnInfo.column}
      </Styles.FooterListItemTitle>
      <Styles.FooterListContent>
        {columnInfo.linkList.map((linkItem) => {
          return (
            <Styles.FooterContentItem key={linkItem.id}>
              {validateRenderItem(linkItem)}
            </Styles.FooterContentItem>
          )
        })}
      </Styles.FooterListContent>
    </Styles.FooterListItem>
  )
}

export default FooterColumnTop
