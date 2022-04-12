import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const TecnicalWrapper = styled.div`
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &.is__visible {
    width: 100%;
    height: 100%;
    visibility: visible;
    opacity: 1;
  }
`

export const HeaderTecnical = styled.header`
  width: 100%;
  margin-bottom: 1.1rem;
  padding: 1.1rem 1.8rem;
`

export const HeaderTecnicalList = styled.ul`
  &,
  li {
    display: flex;
    align-items: center;
  }
  justify-content: space-between;
`

export const HeaderTecnicalItem = styled.li`
  justify-content: flex-start;
  &:last-child {
    justify-content: flex-end;
  }
`
export const ButtonFilterTecnical = styled.button`
  padding: 0.5rem 0.7rem;
  margin-right: 0.3rem;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};
  transition: 0.3s ease-in-out;

  &:hover,
  &.is__selected {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.black};
  }

  &.is__selected {
    opacity: 0.95;
  }

  &.is__selected:hover {
    opacity: 1;
  }

  &.is__invisible {
    opacity: 0;
    visibility: hidden;
  }
`

export const ButtonFilterChange = styled.button`
  color: ${(props) => props.theme.colors.black};

  svg {
    margin-right: 0.4rem;
  }
`

export const ListTecnicals = styled.ul`
  width: 100%;
  max-height: 35rem;
  ${Flex({
    justifyContent: 'flex-start',
    direction: 'column'
  })}
  overflow-x: hidden;
  overflow-y: auto;
`
