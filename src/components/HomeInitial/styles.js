import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem'
  })}
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 600px) {
    ${Flex({
      direction: 'row',
      justifyContent: 'space-between'
    })}
  }
`
const LoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 5px 8px -1px Rgba(0, 0, 0, 0.4);
  transition: 0.2s ease-in-out;

  @media (min-width: 600px) {
    width: 45%;

    &:hover {
      margin-top: -0.4rem;
    }
  }
`
export const LoginButtonUser = styled(LoginButton)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.font};

  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`
export const LoginButtonTechnical = styled(LoginButton)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};

  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.font};
  }
`
