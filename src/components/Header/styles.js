import styled from 'styled-components'
import Image from 'next/image'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;

  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  })}

  padding: 1.4rem 0;
  margin: 0 auto;

  @media (min-width: 767px) {
    flex-direction: row;
    padding: 1rem 0;
  }
`
export const LinkLogoHeader = styled.a`
  max-width: 40rem;
  height: 100%;
  min-height: 2.8rem;
  min-width: 14rem;
  position: relative;
  margin-bottom: 1.2rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
  }
`
export const Imageheader = styled(Image)`
  max-width: 50rem;
`

export const ImageHeaderSkeleton = styled.div`
  display: inline-block;
  position: relative;
`

export const UserAndLinkContent = styled.div`
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  @media(min-width: 767px) {
    ${Flex({
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    })}
  }
`

export const LinkHeader = styled.a`
  padding: 0.4rem 0.8rem;
  color: ${(props) => props.theme.colors.font};
  font-weight: 700;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  background: ${(props) => props.theme.colors.primary};
  opacity: 0.95;
  transition: 0.3s ease-in-out;
  font-size: 1.3em;
  min-width: 18rem;

  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  &:hover {
    opacity: 1;
  }

  svg {
    margin-right: 0.4rem;
  }
`
