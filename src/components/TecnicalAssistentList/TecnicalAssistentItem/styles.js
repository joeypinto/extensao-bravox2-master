import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const ListTecnicalsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 1.1rem 1.8rem;
  transition: 0.3s ease-in-out;

  &:not(.is__selected):hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &.is__selected {
    background-color: ${(props) => props.theme.colors.black};
  }

  &:hover p,
  &:hover address,
  &:hover h3,
  &.is__selected p,
  &.is__selected address,
  &.is__selected h3 {
    color: ${(props) => props.theme.colors.white};
  }
`

export const ListTecnicalItemHeader = styled.header`
  padding: 0 0.5rem 0.7rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.grays.dark};
  width: 100%;
  cursor: pointer;

  h3 {
    font-weight: 700;
    font-size: 1.7em;
  }
`

export const ListTecnicalItemContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  padding-top: 0.5rem;

  @media (min-width: 767px) {
    ${Flex({
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    })}
  }
`

export const ListTecnicalItemInfo = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  padding: 0 0.5rem 0.5rem;

  @media (min-width: 767px) {
    width: 65%;
  }
`

export const ListTecnicalItemInfoText = styled.p`
  margin-bottom: 0.4rem;
  color: ${(props) => props.theme.colors.grays.dark};
`

export const ListTecnicalItemInfoTextSpan = styled.span`
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`

export const ListTecnicalItemInfoTextAddress = styled.address`
  color: ${(props) => props.theme.colors.grays.dark};
  margin-bottom: 1.2rem;
`

export const ListTecnicalItemInfoTextSuccess = styled.p`
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.subtitle.daySuccess};
`

export const TecnicalItemInfoReviewContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const TecnicalItemInfoReviewIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
`

export const TecnicalItemInfoReviewText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.4rem;
`

export const ListTecnicalItemButtonContent = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const ListTecnicalItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.8rem 1rem;

  svg {
    margin-left: 0.3rem;
  }
`
