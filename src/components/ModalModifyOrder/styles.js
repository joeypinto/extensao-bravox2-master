import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const ModalModifyOrderWrapper = styled.div`
  width: 90%;
  max-width: 60rem;
  min-height: 20rem;
  border-radius: 0.6rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
`
export const ModalHeader = styled.header`
  width: 100%;
  min-height: 5rem;
  ${Flex({
    justifyContent: 'center',
    alignItems: 'center'
  })}
  padding: 0.6rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
`

export const HeaderTitle = styled.h3`
  font-weight: 700;
`

export const ButtonClose = styled.button`
  width: 4rem;
  height: 4rem;
  ${Flex({
    justifyContent: 'center',
    alignItems: 'center'
  })}
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  color: ${(props) => props.theme.colors.secondary};
`

export const FormModifyOrder = styled.form`
  width: 90%;
  ${Flex({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  })}
  margin: 1rem auto;

  @media (min-width: 767px) {
    ${Flex({
      justifyContent: 'space-between',
      alignItems: 'center'
    })}
  }
`
export const FormContent = styled.div`
  ${Flex({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  })}
`

export const FormLabel = styled.label`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
`

export const FormSelect = styled.select`
  min-width: 20rem;
  box-shadow: 0 0 6px 1px ${(props) => props.theme.colors.grays.medium};
  border: 1px solid ${(props) => props.theme.colors.grays.light};
  padding: 0.4rem;
  option {
    background-color: ${(props) => props.theme.colors.grays.light};
  }
`

export const FormButton = styled.button`
  min-width: 10rem;
  padding: 1rem;
  ${Flex({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })}
  margin: 2rem auto 1rem;
  border-radius: 0;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};
`
