import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const ConfirmInstallationWrapper = styled.li`
  width: 100%;
  ${Flex({
    direction: 'column',
    gridGap: '1rem'
  })}
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme.colors.grays.light};
  box-shadow: 0 0 10px -2px ${(props) => props.theme.colors.grays.medium};
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    ${Flex({
      gridGap: '1rem',
      justifyContent: 'space-between',
      alignItems: 'center'
    })}
  }
`
export const ConfirmInstallationInfoWrapper = styled.ul`
  ${Flex({
    justifyContent: 'center',
    alignItems: 'flex-start',
    gridGap: '.4rem',
    wrap: 'wrap'
  })}

  @media (min-width: 767px) {
    ${Flex({
      direction: 'column',
      gridGap: '1rem',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      wrap: 'wrap'
    })}
  }
`

export const ConfirmInstallationInfo = styled.li`
  margin-bottom: 0.4rem;
`
export const ConfirmInstallationButtonContent = styled.div`
  padding: 0 2rem;
`

export const ConfirmInstallationButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  border-radius: 0;
`

export const TextBold = styled.b``

export const TextNormal = styled.p``
