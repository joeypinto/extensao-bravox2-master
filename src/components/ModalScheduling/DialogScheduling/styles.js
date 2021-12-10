import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const ModalSchedulingDialog = styled.div`
  width: 95%;
  max-width: 75rem;
  min-height: 10rem;
  max-height: 100vh;
  border-radius: ${(props) =>
    `${props.theme.sizes.borders.borderRadius6} ${props.theme.sizes.borders.borderRadius6} 0 0`};
  overflow: auto;
  background-color: ${(props) => props.theme.colors.white};
`

export const DialogHeader = styled.header`
  width: 100%;
  ${Flex({
    justifyContent: 'space-between'
  })}
  padding: 0.8rem 1.2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.black};
`

export const DialogHeaderTitle = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
`

export const DialogFooter = styled.footer`
  ${Flex({})}
  padding: 0 1.2rem;
`

export const FooterContent = styled.section`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  border-top: 1px solid ${(props) => props.theme.colors.grays.dark};
  padding: 1rem 0;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const FooterTitle = styled.h3`
  margin-left: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
`

export const FooterLegend = styled.ul`
  ${Flex({
    alignItems: 'flex-start',
    wrap: 'wrap'
  })}
  margin-top: 1rem;

  @media (min-width: 767px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 1rem;
    margin-top: 0;
  }
`

export const LegendItem = styled.li`
  ${Flex({
    alignItems: 'flex-start'
  })}
  margin-right: 0.8rem;
`

export const LegendLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`

export const FooterImageLegend = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
  border-radius: 50%;

  &.is__success {
    background-color: ${(props) => props.theme.colors.subtitle.daySuccess};
  }
  &.is__unavailable {
    background-color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
  }
  &.is__daySelect {
    background-color: ${(props) => props.theme.colors.subtitle.daySelected};
  }
  &.is__productDelivery {
    background-color: ${(props) =>
      props.theme.colors.subtitle.dayProductDelivery};
  }
`

export const DialogWrapper = styled.div`
  width: 100%;
  max-height: 30rem;
  ${Flex({
    direction: 'column',
    justifyContent: 'flex-start'
  })}
  padding: 1.2rem;
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const DivisorDialogScheduling = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column'
  })}
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    padding: 0 0.6rem;
    margin: 3rem 0 4rem;
  }
`

export const DialogPeriodContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })}
`

export const DialogAlertDontPeriod = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
`

export const DialogLabel = styled.label`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`

export const DialogSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
  border: 1px solid ${(props) => props.theme.colors.grays.dark};
  background-color: ${(props) => props.theme.colors.grays.light};
`

export const ConfirmedInfo = styled.div`
  width: 100%;
`

export const ConfirmedInfoError = styled.span`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
`

export const ConfirmedInfoTitle = styled.h4`
  width: 100%;
  font-weight: 700;
  text-align: left;
  font-size: 1.8rem;
`

export const ConfirmedInfoSubTitle = styled.p`
  width: 100%;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
`

export const ConfirmedInfoDate = styled.strong`
  width: 100%;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.subtitle.daySelected};
`

export const Confirmedbutton = styled.button`
  width: 100%;
  margin-top: 1.6rem;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.8rem;
  border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
  background-color: ${(props) => props.theme.colors.primary};

  @media (min-width: 767px) {
    margin-top: 3.4rem;
  }
`

export const ButtonCloseScheduling = styled.button`
  width: 3rem;
  height: 3rem;
`
