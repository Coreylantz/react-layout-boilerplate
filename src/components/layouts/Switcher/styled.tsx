import styled from 'styled-components'

import { ISwitcherProps } from './Switcher'

export const SwitcherContainer = styled.div(
    ({ limit = 0, space, threshold }: ISwitcherProps) => `
        > * {
            display: flex;
            flex-wrap: wrap;
            margin: calc((${space} / 2) * -1);

            > * {
                flex-basis: calc((${threshold} - (100% - ${space} )) * 999);
                flex-grow: 1;
                margin: calc(${space} / 2);
            }

            > :nth-last-child(n + ${limit + 1}),
            > :nth-last-child(n + ${limit + 1}) ~ * {
                flex-basis: 100%;
            }
        }
    `
)
