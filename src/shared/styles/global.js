import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'
import { Flex } from './mixins/MixinGlobal'

export default createGlobalStyle`

  //tamanhos
  //apresentação
  //posições
  //Espaçamentos
  //Cores
  //estados
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) =>
  lighten(0.1, props.theme.colors.secondary)};
  }

  ::-webkit-scrollbar{
    width: .4rem;
    background-color: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${(props) => props.theme.colors.primary};
  }

  html{
    font-size: 75%;

    @media(min-width: 767px){
      font-size: 62.5%;
    }
  }

  body{
    min-height: 100vh;
    font-family: ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.font};
  }

  #__next {
    min-height: 100vh;
    width: 100%;
    ${Flex({
      direction: 'column',
      justifyContent: 'space-between'
    })}
  }

  button,
  input,
  textarea{
    font: 400 1.6rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
  }

  button{
    border: none;
    border-radius: ${(props) => props.theme.sizes.borders.borderRadius26};
    cursor: pointer;
    opacity: .96;
    transition: .3s ease-in-out;
    background-color: transparent;

    &:hover{
      opacity: 1;
    }

    &:active,
    &:focus{
      outline: none;
      box-shadow: 0 0 1px 3px ${(props) => props.theme.colors.grays.dark};
    }
  }

  input{
    border-radius: ${(props) => props.theme.sizes.borders.borderRadius8};
    transition: .3s ease-in-out;
    &:active,
    &:focus{
      outline: none;
      box-shadow: 0 0 1px 2px ${(props) => props.theme.colors.grays.dark};
    }
  }

  h1{
    font: 400 3rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
  }

  h2{
    font: 400 2.4rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
  }

  h3{
    font: 400 1.872rem ${(props) => props.theme.fonts.familyPrimary}, ${(
  props
) => props.theme.fonts.familySecondary};
  }

  h4{
    font: 400 1.6rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
  }

  h5{
    font: 400 1.328rem ${(props) => props.theme.fonts.familyPrimary}, ${(
  props
) => props.theme.fonts.familySecondary};
  }

  h6{
    font: 400 1.072rem ${(props) => props.theme.fonts.familyPrimary}, ${(
  props
) => props.theme.fonts.familySecondary};
  }

  a{
    text-decoration: none;
    font: 400 1.6rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
    &:active,
    &:focus{
      outline: none;
      box-shadow: none;
    }
  }

  a.is_linkMap{
    color: ${(props) => props.theme.colors.primary};
  }

  ul{
    list-style: none;
  }

  p{
    font: 400 1.6rem ${(props) => props.theme.fonts.familyPrimary}, ${(props) =>
  props.theme.fonts.familySecondary};
  }

  address{
    font-weight: 400;
    font-style: normal;
    font-size: 1.2rem;
  }

  //SOBRESCRITA
  //Sobrescrita Leaflet

  .leaflet-bar a{
    border: none;
    transition: .3s ease-in-out;
    background-color: ${(props) => props.theme.colors.secondary}!important;
    color: ${(props) => props.theme.colors.white}!important;

    &:hover{
      border: none;
      background-color: ${(props) => props.theme.colors.black}!important;
      color: ${(props) => props.theme.colors.primary}!important;
    }
  }

  .leaflet-control-attribution.leaflet-control{
    background-color: ${(props) => props.theme.colors.secondary}!important;
    color: ${(props) => props.theme.colors.white}!important;

    & > a{
      color: ${(props) => props.theme.colors.primary}!important;
    }
  }

  //Sobrescrita DatePicker
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name{
    min-width: 2.4rem;
    padding: .28rem;
    font-size: 1rem;
  }

  .react-datepicker__day,
  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover{
    border-radius: 0.4rem;
    transition: .3s ease-in-out;
  }

  .react-datepicker__day.disabled,
  .react-datepicker__day.dontMonthCurrency,
  .react-datepicker__day.unvaliable,
  .react-datepicker__day.noDateSendProduct{
    pointer-events:none;
  }

  .react-datepicker__day.dateSendProduct,
  .react-datepicker__day.avaliable,
  .react-datepicker__day.unvaliable,
  .react-datepicker__day.noDateSendProduct{
    font-weight: 700;
    background-color: transparent;
  }

  .react-datepicker__day.disabled{
    background-color: ${(props) => props.theme.colors.grays.light};
    color: ${(props) => props.theme.colors.secondary};
  }

  .react-datepicker__day.dontMonthCurrency{
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.grays.dark};
  }

  .react-datepicker__day.dateSendProduct{
    border: 1.4px solid ${(props) =>
      props.theme.colors.subtitle.dayProductDelivery};
    color: ${(props) => props.theme.colors.subtitle.dayProductDelivery};

    &:hover{
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) =>
        props.theme.colors.subtitle.dayProductDelivery};
    }
  }

  .react-datepicker__day.avaliable{
    border: 1.4px solid ${(props) => props.theme.colors.subtitle.daySuccess};
    color: ${(props) => props.theme.colors.subtitle.daySuccess};

    &:hover{
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.subtitle.daySuccess};
    }
  }

  .react-datepicker__day.unvaliable{
    border: 1px solid ${(props) => props.theme.colors.subtitle.dayAnvaliable};
    color: ${(props) => props.theme.colors.subtitle.dayAnvaliable};
  }

  .react-datepicker__day.noDateSendProduct{
    border: 1px solid ${(props) =>
      props.theme.colors.subtitle.dayProductDelivery};
    color: ${(props) => props.theme.colors.subtitle.dayProductDelivery};
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected{
    &:hover,
    &{
      &.dateSendProduct,
      &.avaliable{
        border: none;
        font-weight: 700;
        background-color: ${(props) => props.theme.colors.subtitle.daySelected};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  .react-datepicker__current-month {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  .react-datepicker__day-names > div {
    margin-top: 1rem;
    padding: .4rem;
    font-size: 1.2rem;
  }

  //Sobrescrita loading
  .spinner[role="spinner"]{
    display: none!important;
  }

`
