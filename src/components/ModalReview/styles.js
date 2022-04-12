import styled from 'styled-components'
import { Flex } from 'shared/styles/mixins/MixinGlobal'

export const Wrapper = styled.div`
  width: 98%;
  max-width: 56rem;
  min-height: 10rem;
  border-radius: 0.6rem 0.6rem 0 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
`
export const ReviewHeader = styled.header`
  width: 100%;
  ${Flex({})}
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};

  @media (min-width: 767px) {
    ${Flex({
      justifyContent: 'space-between'
    })}
  }
`

export const ReviewHeaderTitle = styled.h3`
  font-weight: 700;
`

export const CloseReview = styled.button`
  color: ${(props) => props.theme.colors.black};

  &:focus,
  &:active {
    box-shadow: none;
  }
`
export const ReviewBody = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start'
  })}
  padding: 1.2rem;

  @media (min-width: 767px) {
    ${Flex({
      alignItems: 'flex-start'
    })}
  }
`

export const ReviewTecnicalInfo = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start',
    gridGap: '0.5rem'
  })}

  @media(min-width: 767px) {
    width: 40%;
  }
`

export const ReviewUserForm = styled.form`
  width: 100%;
  min-height: 100%;
  ${Flex({
    direction: 'column',
    alignItems: 'flex-start'
  })}

  @media(min-width: 767px) {
    width: 60%;
    padding-left: 2rem;
  }
`

export const ReviewTitle = styled.h4`
  width: 100%;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-align: left;
`

export const ReviewTecnicalInfoText = styled.p`
  font-size: 1.4rem;
  text-align: left;

  &.bolder {
    font-weight: 700;
  }

  &.address {
    text-transform: capitalize;
  }

  &.dateService {
    margin-top: 1.4rem;
  }
`

export const ReviewNoteContent = styled.div`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
`

export const ReviewNoteList = styled.ul`
  ${Flex({
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
`

export const ReviewButton = styled.button`
  color: ${(props) => props.theme.colors.grays.dark};

  &.IsActive {
    color: ${(props) => props.theme.colors.primary};
  }
  &:focus,
  &:active {
    box-shadow: none;
  }
`

export const ReviewCount = styled.span`
  margin-left: 1.2rem;
  font-size: 1.6rem;
`

export const ReviewAnotationContent = styled.div`
  width: 100%;
  ${Flex({
    direction: 'column',
    justifyContent: 'flex-start',
    gridGap: '1rem'
  })}
  margin-top: 2.4rem;
`
export const ReviewAnotationLabel = styled.label`
  width: 100%;
  font-size: 1.4rem;
  text-align: left;
`

export const ReviewAnotation = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.grays.medium};
  background-color: ${(props) => props.theme.colors.grays.light};
`

export const AnotationFooter = styled.footer`
  width: 100%;
  ${Flex({
    justifyContent: 'flex-end'
  })}
  margin: 2rem 0;
`

export const ReviewButtonSubmit = styled.button`
  width: 100%;
  max-width: 15rem;
  ${Flex({})}
  padding: 1rem;
  border-radius: 2.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};

  svg {
    margin-left: 1rem;
  }
`
