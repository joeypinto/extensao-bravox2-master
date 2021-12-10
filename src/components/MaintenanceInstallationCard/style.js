import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const MaintenanceInstallationWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0px 0px 10px -5px #000;
  background-color: ${(props) => props.theme.colors.grays.light};
`
export const MaintenanceInstallationList = styled.ul`
  line-height: 1.5;
`
export const MaintenanceInstallationListItem = styled.li`
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
  font-size: 1.5rem;
`
export const MaintenanceInfo = styled.div`
  width: 100%;

  ${Flex({
    direction: 'column-reverse',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gridGap: '1rem'
  })}

  @media (min-width: 767px) {
    ${Flex({
      direction: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gridGap: '1rem'
    })}
  }
`

export const MaintenaceInfoContent = styled.ul`
  min-width: 50%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
`

export const MaintenaceItemInfoContent = styled.li`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  padding: .4rem 1rem;
`

export const MaintenaceItemInfoContentText = styled.p`
  width: 100%;
  font-size: 1.5rem;
  span {
    padding-right: 1rem;
    font-weight: bold;

    &.isPendenting {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (min-width: 767px) {
    &.stateOrder {
      text-align: right;
    }
  }
`

export const MaintenanceInstallationTable = styled.table`
  display: table;
  width: 100%;
  span {
    font-weight: bold;
  }
  button {
    margin: 0 auto;
  }

  tfoot {
    min-width: 100%;
    tr {
      width: 100%;
    }
  }
`
export const MaintenanceInstallationTr = styled.tr`
  width: 100%;
  margin: 1rem 0;

  :nth-child(1) {
    th {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: ${(props) => props.theme.colors.grays.medium};
    }
  }
`
export const MaintenanceInstallationTh = styled.th`
  font-weight: bold;
  font-size: 1.7rem;
  text-align: center;
`
export const MaintenanceInstallationTd = styled.td`
  font-size: 1.3rem;
  margin: 1rem 0;
  :first-child {
    ${Flex({
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gridGap: '1rem'
    })}
    text-align: center;

    @media (min-width: 768px) {
      ${Flex({
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gridGap: '1rem'
      })}
      text-align: left;
    }
  }
  :last-child {
    text-align: center;
  }

  &.table__foot {
    display: table-cell;
  }
`
export const MaintenanceInstallationImage = styled.img`
  width: 100%;
  max-width: 100px;
  border: 1px solid ${(props) => props.theme.colors.grays.medium}; ;
`
