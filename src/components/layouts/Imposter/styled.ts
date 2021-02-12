import styled, { css } from 'styled-components'

import { IImposterProps } from './Imposter'

const isBreakoutStyles = (space?: string) => `
    margin: ${space};
    max-height: calc(100% - (${space} * 2));
    max-width: calc(100% - (${space} * 2));
    overflow: auto;
`

export const ImposterContainer = styled.div(
    ({ isBreakout, isFixed, space }: IImposterProps) => `
      left: 50%;
      position: ${isFixed ? 'fixed' : 'absolute'};
      top: 50%;
      transform: translate(-50%, -50%);

      ${isBreakout ? isBreakoutStyles(space) : ''}
    `
)
