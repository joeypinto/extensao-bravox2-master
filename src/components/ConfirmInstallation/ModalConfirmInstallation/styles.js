import { Flex } from 'shared/styles/mixins/MixinGlobal'
import styled from 'styled-components'

export const ModalConfirmInstallationWrapper = styled.div`
  width: 90%;
  max-width: 90rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  border-radius: .6rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
`

export const ModalHeader = styled.header`
  width: 100%;
  padding: 1rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
`

export const MotalTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`

export const ModalButtonClose = styled.button`
  height: 4rem;
  width: 4rem;
  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  })}
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 0.4rem;
  right: 1rem;
`

export const ModalBody = styled.form`
  width: 90%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
  margin: 2.6rem auto;
  overflow-y: auto;
  padding: 0 1rem;

  @media (min-width: 900px) {
    width: 80%;
  }
`

export const modalInfoList = styled.ul`
  width: 100%;

  ${Flex({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: '1rem'
  })}
  margin-bottom: 2rem;

  @media (min-width: 767px) {
    ${Flex({
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridGap: '1rem'
    })}
  }
`

export const modalInfoListitem = styled.li`
  padding: 1rem 0;
`

export const ModalFormContent = styled.div`
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  })}

  &.row {
    width: auto;
    ${Flex({
      direction: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gridGap: '1rem'
    })}

    @media (min-width: 767px) {
      flex-direction: row;
    }

    &.center {
      ${Flex({
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gridGap: '1rem'
      })}
    }
  }

  &.full {
    width: 100%;
    gap: 4rem;
  }

  &.noGap {
    gap: 0;
  }

  &.full-start {
    width: 100%;
    ${Flex({
      direction: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'flex-start'
    })}

    @media(min-width: 767px) {
      ${Flex({
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      })}
    }
  }

  &.half {
    width: 100%;

    @media (min-width: 767px) {
      width: 50%;
    }
  }

  &.top-2 {
    margin-top: 2rem;
    gap: 2rem;
  }
`

export const ModalFormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`

export const ModalFormSelect = styled.select`
  padding: 1rem;
  background-color: transparent;
  border: 0;

  &.appointment {
    color: ${(props) => props.theme.colors.subtitle.daySelected};
    font-weight: 700;
  }

  &.completed {
    color: ${(props) => props.theme.colors.subtitle.daySuccess};
    font-weight: 700;
  }

  &.canceled {
    color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
    font-weight: 700;
  }

  &.pendenting {
    color: ${(props) => props.theme.colors.subtitle.dayProductDelivery};
    font-weight: 700;
  }

  option {
    color: ${(props) => props.theme.colors.black};
  }
`

export const ModalFormInput = styled.input`
  width: 95%;
  padding: 1rem;
  box-shadow: 0 0 10px 0px ${(props) => props.theme.colors.grays.medium};
  border: 0;
  margin-top: 1rem;
`

export const ModalFormInputBase = styled.div`
  width: 95%;
  ${Flex({
    alignItems: 'center',
    justifyContent: 'flex-start'
  })}
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
  box-shadow: 0 0 10px 0px ${(props) => props.theme.colors.grays.medium};
  margin-top: 1rem;
`

export const ModalFormInputBaseDivisor = styled.b`
  font-weight: 700;
  font-size: 2rem;
  margin: 0 1rem;
`

export const ModalInputTime = styled.input`
  min-width: 46%;
  padding: 1rem;
  text-align: center;
  border: 0;

  &.borderRight {
    border-right: 2px solid ${(props) => props.theme.colors.grays.light};
  }

  &.borderLeft {
    border-left: 2px solid ${(props) => props.theme.colors.grays.light};
  }

  &:active,
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: none;
  }
`

export const ModalFormInputSpan = styled.span`
  width: 95%;
  margin-top: 1rem;
  font-size: 1.2rem;
`

export const ModalImagesList = styled.ul`
  max-width: 100%;
  min-height: 14rem;
  ${Flex({
    justifyContent: 'flex-start',
    gridGap: '1.6rem'
  })}
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 0.8rem;
  }

  @media (min-width: 767px) {
    max-width: 60%;
  }
`

export const ModalImageItem = styled.li`
  max-width: 16rem;
  min-width: 14rem;
`

export const ModalSelectImages = styled.div`
  width: 100%;
  padding: 1rem;
  ${Flex({
    justifyContent: 'flex-start',
    alignItems: 'center'
  })}
  position: relative;

  @media (min-width: 767px) {
    width: 40%;
  }

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 9999;
    cursor: pointer;
  }
`

export const ModalImageIcon = styled.figure`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  ${Flex({
    justifyContent: 'center',
    alignItems: 'center'
  })}
  margin-right: 1.6rem;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`

export const ModalImageIconTitle = styled.h4`
  font-size: 1.6rem;
`

export const ModalTextarea = styled.textarea`
  width: 100%;
  min-height: 10rem;
  margin-top: 2rem;
  border: 1px solid ${(props) => props.theme.colors.black};
  padding: 1rem;
  border-radius: 0;
  resize: none;
`

export const ModalButton = styled.button`
  ${Flex({
    alignItems: 'center',
    justifyContent: 'center'
  })}
  font-weight: 700;
  padding: 1rem 2.4rem;
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.primary};
`

export const TextBold = styled.b``

export const TextNormal = styled.p``

export const ImageService = styled.img`
  max-width: 100%;
`
