import styled from 'styled-components'

import { IIconProps } from './Icon'

export const IconContainer = styled.span(
    ({ space }: IIconProps) => `
    display: inline-flex;
    align-items: baseline;

    svg {
        height: 0.75em;
        height: 1cap;
        margin-inline-end: ${space};
        width: 0.75em;
        width: 1cap;
    }
`
)
