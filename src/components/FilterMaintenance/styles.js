import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const FilterMaintenanceWrapper = styled.form`
  width: 100%;
  ${Flex({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    direction: 'column',
    gridGap: '1.2rem'
  })}
  margin-bottom: 1.2rem;

  @media (min-width: 767px) {
    ${Flex({
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gridGap: '1.2rem'
    })}
  }
`

export const FilterMaintenanceLabel = styled.label`
  ${Flex({
    alignItems: 'center',
    gridGap: '.8rem'
  })}
  font-weight: 700;
  font-size: 1.6rem;
`

export const FilterMaintenanceSelect = styled.select`
  padding: 0.4rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
`
