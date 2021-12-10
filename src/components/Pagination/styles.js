import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    wrap: 'wrap'
  })}
  padding: 1.4rem 0;
  margin: 1.4rem auto 1.6rem;
`

export const PaginationContent = styled.ul`
  &,
  .PaginationItem {
    ${Flex({
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    })}
  }
`

export const PaginationLink = styled.a`
  padding: 1rem 1.4rem;
  text-decoration: none;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.secondary};
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &.is__currency {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &.is__currency {
    font-weight: 700;
  }
`

export const PaginationNotLink = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.grays.medium};
`
