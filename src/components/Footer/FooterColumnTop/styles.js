import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const FooterListItem = styled.li`
  width: 100%;

  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}

  @media(min-width: 767px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.33%;
  }
`

export const FooterListItemTitle = styled.h4`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.white};
`

export const FooterListContent = styled.ul`
  width: 100%;

  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  })}
`

export const FooterContentItem = styled.li`
  width: 100%;
  margin-bottom: 0.6rem;
`

export const ListItemLink = styled.a`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s ease-in-out;

  &:active,
  &:focus {
    outline: none;
    padding-left: 0.5rem;
    border-left: 2px solid ${(props) => props.theme.colors.primary};
  }
`

export const ListItemLinkPhone = styled.a`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
`

export const ItemContentText = styled.p`
  color: ${(props) => props.theme.colors.white};
`

export const ListItemSupport = styled.div`
  margin-top: 1rem;
  max-width: 30rem;
  padding: 0.8rem 1rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  })}

  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  border: 1px solid ${(props) => props.theme.colors.white};

  svg {
    margin-right: 0.6rem;
  }

  .support-text {
    width: 100%;
    ${Flex({
      direction: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    })}
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.white};

    @media (min-width: 767px) {
      display: block;
    }
  }
`
export const SuppertText = styled.p`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 767px) {
    display: block;
  }
`

export const SuppertTarget = styled.span`
  color: ${(props) => props.theme.colors.primary};
  @media (min-width: 767px) {
    margin-left: 0.6rem;
  }
`

export const SVGContent = styled.div`
  margin-right: 0.6rem;
  color: ${(props) => props.theme.colors.white};
`
