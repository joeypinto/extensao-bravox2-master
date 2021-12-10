import { css } from 'styled-components'

export const Flex = ({
  direction,
  alignItems,
  wrap,
  justifyContent,
  gridGap
}) => css`
  display: flex;
  flex-direction: ${direction ? direction : 'row'};
  align-items: ${alignItems ? alignItems : 'center'};
  justify-content: ${justifyContent ? justifyContent : 'center'};
  flex-wrap: ${wrap ? wrap : 'nowrap'};
  gap: ${gridGap ? gridGap : '0rem'};
`
