import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const MaintenanceWrapper = styled.ul`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  margin-bottom: 1.4rem;
`

export const MaintenanceDayWrapper = styled.li`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  margin-bottom: 1.8rem;
  padding-top: 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0px 10px ${(props) => props.theme.colors.grays.medium};

  @media (min-width: 767px) {
    ${Flex({
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    })}
  }
`

export const MaintenanceTitle = styled.h3`
  width: 100%;
  ${Flex({})}
  color: ${(props) => props.theme.colors.grays.dark};

  &.isToday {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }
`

export const BoldText = styled.b`
  font-weight: 700;
`

export const ListPeriods = styled.ul`
  width: 100%;
  ${Flex({
    wrap: 'wrap'
  })}
  padding: 1rem 1.4rem;

  @media (min-width: 767px) {
    ${Flex({
      justifyContent: 'space-between'
    })}
  }
`

export const PeriodItem = styled.li`
  ${Flex({
    direction: 'column'
  })}
  padding: 1rem;
`

export const PeriodInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  text-align: center;

  &.unAvaliable {
    color: ${(props) => props.theme.colors.grays.medium};
  }
`

export const PeriodLabel = styled.label`
  margin-bottom: 0.6rem;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.6rem;
`

export const PeriodFooter = styled.div`
  width: 100%;
  ${Flex({})}
  padding: 0.6rem 0;
`

export const PeriodCheckBox = styled.input`
  margin-right: 0.4rem;
`

export const PeriodLabelCheckbox = styled.label`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.6rem;
`
