import styled from 'styled-components'

import { ISidebarProps } from './Sidebar'

export const SidebarContainer = styled.div(
    ({ contentMin, noStretch, side, sideWidth, space }: ISidebarProps) => `
    overflow: hidden;

    > * {
        ${noStretch ? 'align-items: flex-start' : ''};
        display: flex;
        flex-wrap: wrap;
        margin: calc(${space} / 2 * -1);

        > * {
            ${sideWidth ? `flex-basis: ${sideWidth};` : ''};
            margin: calc(${space} / 2);
            flex-grow: 1;
        }

        > ${side === 'right' ? ':first-child' : ':last-child'} {
            flex-basis: 0;
            flex-grow: 999;
            min-width: calc(${contentMin} - ${space});
        }
    }
`
)
