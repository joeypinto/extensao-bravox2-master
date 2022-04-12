import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 120rem;
  margin: 4rem auto;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  & > * {
    max-width: 70rem;
    padding: 1rem;

    @media (min-width: 767px) {
      padding: 0;
    }
  }
`

export const WrapperHeader = styled.header`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  svg {
    margin-bottom: 1.2rem;
    color: ${(props) => props.theme.colors.primary};
  }

  margin-bottom: 1.2rem;

  .header__title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
  }
`

export const WrapperContent = styled.p`
  text-align: justify;
  margin-bottom: 1.4rem;
`
export const ContentButtons = styled.div`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`

export const WrapperButton = styled.button`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  min-width: 10rem;
  padding: 2rem;
  text-align: center;
`
