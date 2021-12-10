import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'

const Pagination = ({
  amountpages,
  currencyPage,
  prefixUrl,
  searchWord,
  typeRef
}) => {
  const validateKeyWord = () => {
    if (searchWord !== undefined) {
      if (typeRef !== 'query') {
        return `?search=${searchWord}`
      } else {
        return `&search=${searchWord}`
      }
    } else {
      return ''
    }
  }

  let keyWord = validateKeyWord()

  return (
    <>
      {amountpages > 1 && (
        <Styles.PaginationWrapper>
          {parseInt(currencyPage) === 1 ? (
            <Styles.PaginationNotLink>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="1x"
                aria-label="Seta para voltar"
              />
            </Styles.PaginationNotLink>
          ) : (
            <Link
              href={`${prefixUrl}${typeRef === 'query' ? `?page=` : '/'}${
                currencyPage - 1
              }${keyWord}`}
              passHref
            >
              <Styles.PaginationLink>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  size="1x"
                  aria-label="Seta para voltar"
                />
              </Styles.PaginationLink>
            </Link>
          )}

          <Styles.PaginationContent>
            {Array(amountpages)
              .fill(null)
              .map((value, index) => index + 1)
              .map((page) => {
                return (
                  <li className="PaginationItem" key={page}>
                    <Link
                      href={`${prefixUrl}${
                        typeRef === 'query' ? `?page=` : '/'
                      }${page}${keyWord}`}
                      passHref
                    >
                      <Styles.PaginationLink
                        className={`${page === currencyPage && 'is__currency'}`}
                      >
                        {page}
                      </Styles.PaginationLink>
                    </Link>
                  </li>
                )
              })}
          </Styles.PaginationContent>

          {parseInt(currencyPage) === amountpages ? (
            <Styles.PaginationNotLink>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="1x"
                aria-label="Seta para voltar"
              />
            </Styles.PaginationNotLink>
          ) : (
            <Link
              href={`${prefixUrl}${typeRef === 'query' ? `?page=` : '/'}${
                currencyPage + 1
              }${keyWord}`}
              passHref
            >
              <Styles.PaginationLink>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="1x"
                  aria-label="Seta para voltar"
                />
              </Styles.PaginationLink>
            </Link>
          )}
        </Styles.PaginationWrapper>
      )}
    </>
  )
}

export default Pagination
