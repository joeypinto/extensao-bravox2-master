import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const LoginWrapper = styled.main`
  width: 100%;
  min-height: 20rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`

export const LoginContent = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 1rem 1.2rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
`

export const LoginHeaderMain = styled.h1`
  width: 100%;
  margin-bottom: 1.8rem;
  text-align: center;
`

export const LoginTextMain = styled.p`
  width: 100%;
  margin-bottom: 1.4rem;
  text-align: center;
`

export const LoginForm = styled.form`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}

  border-radius: ${(props) =>
    `${props.theme.sizes.borders.borderRadius8} ${props.theme.sizes.borders.borderRadius8} 0 0`};
  overflow: hidden;
`

export const FormHeader = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`

export const FormHeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  width: 100%;
  text-align: center;
`

export const FormContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  padding: 1rem 2rem;
`

export const FormContentTitle = styled.p`
  text-align: left;
  width: 100%;
  margin-bottom: 1.4rem;
`

export const FieldWrapper = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  margin-bottom: 1.2rem;
`
export const FormWrapperLabel = styled.label`
  text-align: left;
  color: ${(props) => props.theme.colors.grays.dark};
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
`

export const FormWrapperInput = styled.input`
  width: 100%;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius4};
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  padding: 1rem;
  margin-bottom: 0.4rem;
  text-align: left;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.grays.dark};
`

export const FormWrapperNotice = styled.span`
  color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
`

const FormButton = styled.button`
  width: 100%;
  font-weight: 700;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  padding: 1rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem'
  })}
  transition: .3s ease-in-out;
  box-shadow: 0 6px 6px -2px Rgba(0, 0, 0, 0.4);
`
export const FormButtonContinue = styled(FormButton)`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  :hover,
  :active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }
`
export const FormButtonBack = styled(FormButton)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  :hover,
  :active {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
`
export const FormFooter = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem'
  })}

  @media(min-width:600px) {
    ${Flex({
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridGap: '1.5rem'
    })}
    margin-top: 1rem;
  }
`
