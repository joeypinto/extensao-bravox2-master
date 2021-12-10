import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const ReviewContent = styled.div`
  width: 100%;

  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  padding: 1rem 1.4rem;

  svg {
    margin-right: 0.4rem;
  }
`

export const FragmentButton = styled.button`
  min-width: 14rem;
  ${Flex({
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  padding: 1rem 1.4rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  font-weight: 700;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};

  &.roundedStatus {
    width: 5rem;
    height: 5rem;
    gap: 0.2rem;
    margin-left: 0.6rem;
    border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};

    &,
    & > * {
      transition: 0.4s ease-in-out;
    }

    .text__button {
      width: 10rem;
      overflow: hidden;
    }

    @media (min-width: 590px) {
      margin-bottom: 0.4rem;
    }

    @media (min-width: 1024px) {
      & {
        min-width: auto;
      }
      .text__button {
        width: 0;
      }

      &:hover {
        width: 14rem;
        .text__button {
          width: 10rem;
        }
      }
    }
  }

  &.reschedule {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
  }

  &.isAvaliable {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.black};
  }

  &.cancel__appointment {
    background-color: ${(props) => props.theme.colors.alertModal.bgColor};
    color: ${(props) => props.theme.colors.alertModal.fontColor};
  }
`
