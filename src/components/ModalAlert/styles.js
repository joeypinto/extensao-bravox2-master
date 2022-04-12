import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'
import { darken } from 'polished'

export const ModalContent = styled.div`
  width: 100%;
  max-width: 50rem;
  min-height: 10rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
  overflow: hidden;
  position: relative;
  z-index: 1;
  background: ${(props) =>
    `linear-gradient(to right, ${
      props.theme.colors.defaultModal.bgColor
    }, ${darken(0.1, props.theme.colors.defaultModal.bgColor)}) `};
  color: ${(props) => props.theme.colors.defaultModal.fontColor};

  &.error {
    background: ${(props) =>
      `linear-gradient(to right, ${
        props.theme.colors.alertModal.bgColor
      }, ${darken(0.1, props.theme.colors.alertModal.bgColor)}) `};
    color: ${(props) => props.theme.colors.alertModal.fontColor};
  }

  &.warning {
    background: ${(props) =>
      `linear-gradient(to right, ${
        props.theme.colors.warningModal.bgColor
      }, ${darken(0.1, props.theme.colors.warningModal.bgColor)}) `};
    color: ${(props) => props.theme.colors.warningModal.fontColor};
  }

  &.success {
    background: ${(props) =>
      `linear-gradient(to right, ${
        props.theme.colors.successModal.bgColor
      }, ${darken(0.1, props.theme.colors.successModal.bgColor)}) `};
    color: ${(props) => props.theme.colors.successModal.fontColor};
  }
`

export const ModalWrapper = styled.div`
  width: 100%;

  ${Flex({
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'column'
  })}

  padding: 1.4rem;
  z-index: 4;
`
export const ModalHeader = styled.header`
  width: 100%;
  ${Flex({
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'row'
  })}
  margin-bottom: 1rem;
`

export const ModalHeaderButton = styled.button`
  color: ${(props) => props.theme.colors.white};
`

export const ModalHeaderTitle = styled.h3`
  text-align: left;
  font-weight: 700;
`

export const ModalBody = styled.div`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'row',
    wrap: 'wrap'
  })}
  margin-bottom: 1rem;
`

export const ModalFooter = styled.footer`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'row'
  })}
`

export const ModalFooterText = styled.p`
  margin-top: 2rem;
  text-align: left;
  font-size: 1.2rem;
`

export const ModalSVG = styled.div`
  height: 150%;
  position: absolute;
  top: -25%;
  right: 10%;
  opacity: 0.5;
  font-size: 2rem;
  z-index: -1;
  color: ${(props) => darken(0.2, props.theme.colors.defaultModal.bgColor)};

  &.error {
    color: ${(props) => darken(0.2, props.theme.colors.alertModal.bgColor)};
  }

  &.warning {
    color: ${(props) => darken(0.2, props.theme.colors.warningModal.bgColor)};
  }

  &.success {
    color: ${(props) => darken(0.2, props.theme.colors.successModal.bgColor)};
  }
`
