import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.li`
  width: 100%;
  ${Flex({
    direction: 'column',
    gridGap: '1rem'
  })}
  padding: 1rem 2rem;
  margin-bottom: 1.4rem;
  overflow: hidden;
  border-radius: 0.6rem;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.colors.grays.light};
`
export const Header = styled.header`
  width: 100%;
  ${Flex({
    justifyContent: 'space-between'
  })}
  margin-bottom: 1rem;
`

export const ReviewContent = styled.ul`
  width: 100%;
  ${Flex({
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gridGap: '.4rem'
  })}
  margin-bottom: 1rem;

  li {
    &.isActive {
      color: ${(props) => props.theme.colors.warningModal.bgColor};
    }
    &.isNotActive {
      color: ${(props) => props.theme.colors.grays.medium};
    }
  }
`

export const ReviewTextContent = styled.div`
  width: 100%;
  max-height: 30rem;
  padding: 1.4rem 1rem;
  margin: 1rem 0;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${(props) => rgba(props.theme.colors.grays.medium, 0.2)};
`

export const ReviewDescription = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.grays.dark};
`

export const TextNormal = styled.p``

export const TextBold = styled.b``

export const TextStatus = styled.span`
  &.isCompleted {
    color: ${(props) => props.theme.colors.successModal.bgColor};
  }
`
