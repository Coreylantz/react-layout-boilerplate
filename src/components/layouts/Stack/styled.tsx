import styled from 'styled-components'

import { IStackProps } from './Stack'

export const StackContainer = styled.div(
    ({ recursive = false, space, splitAfter }: IStackProps) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${recursive ? '' : '>'} * {
        margin-bottom: 0;
        margin-top: 0;

        + * {
            margin-top: ${space};
        }
    }

    ${
        splitAfter
            ? `
        &:only-child {
            height: 100%;
        }

        > :nth-child(${splitAfter}) {
            margin-bottom: auto;
        }
    `
            : ''
    }
`
)
