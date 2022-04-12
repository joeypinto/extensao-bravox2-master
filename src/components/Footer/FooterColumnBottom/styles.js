import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const FooterBottomItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;

  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  p {
    text-align: center;
  }

  &.social {
    ${Flex({
      direction: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    })}
  }

  &.institutional * {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 767px) {
    width: 25%;
    margin-bottom: 0;

    &:nth-child(1) {
      align-items: flex-start;
    }

    &:nth-child(3) {
      align-items: flex-end;
    }

    &:nth-child(2) {
      width: 50%;
    }
  }
`
export const FooterAddress = styled.address`
  padding: 0.6rem;
  font-size: 1.4rem;
  font-style: normal;
  text-align: center;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 767px) {
    padding: 0;
  }
`

export const FooterBottomText = styled.p`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
`

export const FooterBottomList = styled.ul`
  ${Flex({
    direction: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gridGap: '1rem'
  })}

  @media(min-width: 767px) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 0;
  }
`

export const FooterLinkItem = styled.li`
  margin-bottom: 0.8rem;
`

export const FooterBottomLink = styled.a`
  padding-bottom: 0.4rem;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.grays.dark};
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.grays.dark};
  }

  &:active,
  &:focus {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.grays.dark};
  }
`

export const SocialMediaItem = styled.a`
  border-radius: 0.6rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:active,
  &:focus,
  &:hover {
    outline: none;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const SocialMediasContent = styled.div`
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  })}
  color: ${(props) => props.theme.colors.grays.dark};
`
export const SocialMediaTitle = styled.p`
  margin-right: 0.8rem;
  text-align: right;
`
