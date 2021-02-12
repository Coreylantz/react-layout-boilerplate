import styled from 'styled-components'

import { BORDER } from 'styles/variables'

import { IBoxProps } from './Box'

const noBorderStyles = `
  outline-offset: calc(${BORDER.thin}) * -1);
  outline: ${BORDER.thin} solid transparent;
`

export const BoxContainer = styled.div(
    ({ borderWidth, darkColor, invert, lightColor, padding }: IBoxProps) => `
      ${borderWidth ? '' : noBorderStyles}
      background-color: ${invert ? darkColor : lightColor};
      border: ${borderWidth} solid;
      color: ${invert ? lightColor : darkColor};
      padding: ${padding};

      * {
        color: inherit;
      }
    `
)
