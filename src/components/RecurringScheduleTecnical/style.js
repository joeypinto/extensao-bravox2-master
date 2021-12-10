import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const ScheduleWrapper = styled.form`
  width: 100%;
  margin: 1rem auto;
  background-color: ${(props) => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius10};
  box-shadow: 0rem 0rem 1rem ${(props) => props.theme.colors.grays.medium};
`
export const ScheduleContentWrapper = styled.div`
  ${Flex({
    direction: 'row',
    justifyContent: 'space-between',
    gridGap: '1rem',
    wrap: 'wrap'
  })}

  @media (min-width: 650px) {
    ${Flex({
      direction: 'row',
      justifyContent: 'space-between'
    })}
  }
`
export const ScheduleContentInputWrapper = styled.div`
  ${Flex({
    direction: 'column'
  })}
`
export const ScheduleTitleDay = styled.h3`
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
`
export const ScheduleLabel = styled.label`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
  margin: 1rem 0;
`
export const ScheduleInput = styled.input`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  border-radius: 0.4rem;
  text-align: center;
`
