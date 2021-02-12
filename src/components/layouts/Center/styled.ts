import styled from 'styled-components'

import { ICenterProps } from './Center'

const intrinsicStyles = `
  align-items: center;
  display:flex;
  flex-direction: column;
`

export const CenterContainer = styled.div(
    ({ centerText, guttersWidth, intrinsic, max }: ICenterProps) => `
    ${intrinsic ? intrinsicStyles : ''}
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: ${max};
    padding-left: ${guttersWidth};
    padding-right: ${guttersWidth};
    text-align: ${centerText ? 'center' : ''};
`
)
