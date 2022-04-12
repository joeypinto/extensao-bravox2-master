import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Styles from './styles'
import { validateLengthObject } from 'utils'

const FooterColumnBottom = ({ columnInfo }) => {
  const validateLinkList = (linkItem) => {
    if (validateLengthObject(linkItem.exclused)) {
      if (linkItem.exclused.type === 'address') {
        return <Styles.FooterAddress>{linkItem.label}</Styles.FooterAddress>
      } else {
        return (
          <Link href={linkItem.link} passHref>
            <Styles.SocialMediaItem target="_blank">
              <FontAwesomeIcon icon={linkItem.exclused.icon} size="2x" />
            </Styles.SocialMediaItem>
          </Link>
        )
      }
    } else if (linkItem.link) {
      return (
        <Styles.FooterLinkItem>
          <Link href={linkItem.link} passHref>
            <Styles.FooterBottomLink>{linkItem.label}</Styles.FooterBottomLink>
          </Link>
        </Styles.FooterLinkItem>
      )
    } else {
      return (
        <Styles.SocialMediaTitle
          dangerouslySetInnerHTML={{ __html: linkItem.label }}
        ></Styles.SocialMediaTitle>
      )
    }
  }
  return (
    <Styles.FooterBottomItem className={columnInfo.column}>
      {columnInfo.linkList.map((column) => {
        return (
          <Styles.FooterBottomList key={column.id}>
            {validateLinkList(column)}
          </Styles.FooterBottomList>
        )
      })}
      {/*       
      {columnData.id === '1-institucionais' ? (
        <Styles.FooterBottomList>
          {columnData.items.map((institutional) => {
            return (
              <Styles.FooterLinkItem key={`#${institutional.text}`}>
                <Link href={institutional.link} passHref>
                  <Styles.FooterBottomLink>
                    {institutional.text}
                  </Styles.FooterBottomLink>
                </Link>
              </Styles.FooterLinkItem>
            )
          })}
        </Styles.FooterBottomList>
      ) : columnData.id === '2-corporativo' ? (
        columnData.items.map((corporate) => {
          return corporate.type === 'copyright' ? (
            <Styles.FooterBottomText key={corporate.text}>
              {corporate.text}
            </Styles.FooterBottomText>
          ) : (
            <Styles.FooterAddress key={corporate.text}>
              {corporate.text}
            </Styles.FooterAddress>
          )
        })
      ) : (
        <Styles.SocialMediasContent role="contentinfo">
          <p className="socialMedia-title">
            Siga nossas <br />
            redes sociais:
          </p>
          {columnData.items.map((socialmedias, index) => {
            return (
              <Link href={socialmedias.link} passHref key={index}>
                <Styles.SocialMediaItem target="_blank">
                  <FontAwesomeIcon icon={socialmedias.icon} size="2x" />
                </Styles.SocialMediaItem>
              </Link>
            )
          })}
        </Styles.SocialMediasContent>
      )} */}
    </Styles.FooterBottomItem>
  )
}

export default FooterColumnBottom
