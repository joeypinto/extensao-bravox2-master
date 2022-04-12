import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'
import { lighten } from 'polished'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  min-height: 10rem;
  ${Flex({
    direction: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  })}
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: 767px) {
    ${Flex({
      direction: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    })}
  }
`

export const ButtonClose = styled.button`
  ${Flex({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })}
  position: absolute;
  padding: 0rem 0.4rem 0.6rem 0.6rem;
  border-radius: 50%;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.colors.black};
  transition: 0.3s ease-in-out;
  z-index: 4;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    @media (min-width: 767px) {
      color: ${(props) => props.theme.colors.alertModal.bgColor};
    }
  }

  @media (min-width: 767px) {
    padding: 1rem;
  }
`

export const CancelModalDivisor = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  })}

  &.is__top {
    height: 33%;
    background-color: ${(props) => props.theme.colors.alertModal.bgColor};
  }

  &.is__bottom {
    height: 66%;
    ${Flex({
      direction: 'column'
    })}
  }

  @media (min-width: 767px) {
    width: 50%;
    &.is__bottom,
    &.is__top,
    & {
      height: 100%;
    }

    min-height: 30rem;
  }
`

export const Header = styled.header`
  width: calc(100% - 1.6rem);
  ${Flex({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })}
  position: relative;
  text-align: center;
  padding: 1rem;

  @media (min-width: 767px) {
    width: 100%;
  }
`

export const TitleHeader = styled.h3`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colors.alertModal.fontColor};
`

export const ContentImage = styled.picture`
  width: 100%;
  height: 100%;
  ${Flex({})}
  padding: 1.4rem;

  & > * {
    max-height: 100%;
  }

  @media (min-width: 767px) {
    & > * {
      max-width: 100%;
      max-height: auto;
    }
  }
`

export const CancelContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  margin: 1rem auto;
`

export const ContentField = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
  padding: 1.2rem;
`

export const Label = styled.label`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;

  @media (min-width: 767px) {
    width: auto;
    text-align: left;
  }
`

export const InformationCancel = styled.textarea`
  width: 100%;
  min-height: 10rem;
  margin-top: 1.2rem;
  padding: 1rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  background-color: ${(props) => lighten(0.04, props.theme.colors.grays.light)};

  &:active,
  &:focus {
    border-color: ${(props) => props.theme.colors.grays.dark};
    outline: none;
  }
`

export const ButtonCancel = styled.button`
  width: 100%;
  ${Flex({
    gridGap: '1rem'
  })}
  padding: 1rem 1.4rem;
  margin-top: 1.8rem;
  font-size: 1.4rem;
  font-weight: 700;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.colors.alertModal.bgColor};
  color: ${(props) => props.theme.colors.alertModal.bgColor};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.alertModal.bgColor};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 767px) {
    width: auto;
  }
`
