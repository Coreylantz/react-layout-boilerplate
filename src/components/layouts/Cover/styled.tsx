import styled from 'styled-components'

import { ICoverProps } from './Cover'

export const CoverContainer = styled.div(
    ({ centeredSelector, minHeight, noPad, space }: ICoverProps) => `
        display: flex;
        flex-direction: column;
        min-height: ${minHeight};
        padding: ${noPad ? 0 : space};

        > * {
            margin-top: ${space};
            margin-bottom: ${space};
        }

        > :first-child:not(${centeredSelector}) {
            margin-top: 0;
        }

        > :last-child:not(${centeredSelector}) {
            margin-bottom: 0;
        }

        > ${centeredSelector} {
            margin-top: auto;
            margin-bottom: auto;
        }
    `
)
