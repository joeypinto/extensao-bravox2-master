import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const MyAppointmentsWrapper = styled.ul`
  width: 100%;

  ${Flex({
    direction: 'column'
  })}
  padding: 1rem 0;
`

export const HeaderAppointments = styled.li`
  width: 100%;

  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  margin-bottom: 1rem;
  padding: 1.4rem 1.6rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius10};
  background-color: ${(props) => props.theme.colors.black};

  .header__item {
    width: 50%;
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
    word-break: normal;
    color: ${(props) => props.theme.colors.white};

    @media (min-width: 590px) {
      width: 33%;
    }
    &:last-child {
      display: none;
    }
  }

  @media (min-width: 590px) {
    .header__item {
      &:last-child {
        display: block;
      }
    }
  }
`

export const Appointment = styled.li`
  width: 100%;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    wrap: 'wrap'
  })}
  padding: 1rem 0;

  &:nth-child(odd) {
    background-color: #fbfbfb;
  }

  .appointment__fragment {
    width: 50%;
    ${Flex({
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gridGap: '0.6rem',
      wrap: 'wrap'
    })}

    &:nth-child(2) {
      ${Flex({
        direction: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
      })}
    }

    &:last-child {
      width: 100%;
      margin: 1rem auto 1.4rem;
    }
  }

  @media (min-width: 590px) {
    flex-wrap: nowrap;

    .appointment__fragment {
      width: 100%;
      &:last-child {
        width: 100%;
        margin: 0;
      }
    }
  }
`

export const FragmentText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
`

export const FragmentStatus = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;

  &.cancel {
    color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
  }

  &.schedule {
    color: ${(props) => props.theme.colors.subtitle.daySelected};
  }

  &.schedule_pendent {
    color: ${(props) => props.theme.colors.subtitle.dayProductDelivery};
  }

  &.concluded {
    color: ${(props) => props.theme.colors.subtitle.daySuccess};
  }
`
