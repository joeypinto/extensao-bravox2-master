import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as Styles from './styles'

const SearchItems = ({ preRoute }) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const setTextSearch = useDebouncedCallback((e) => {
    setSearch(e.target.value)
  }, 200)
  const setStateForSearch = () => {
    router.push(
      {
        pathname: preRoute,
        query: {
          search: search
        }
      },
      undefined,
      { shallow: false }
    )
  }

  return (
    <Styles.SearchWrapper>
      <Styles.SearchContent>
        <Styles.SearchInput
          placeholder="Busca"
          onInput={(e) => {
            setTextSearch(e)}}
        />
        <Styles.SearchButton onClick={() => {
        setStateForSearch()
        }}>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Styles.SearchButton>
      </Styles.SearchContent>
    </Styles.SearchWrapper>
  )
}

export default SearchItems
