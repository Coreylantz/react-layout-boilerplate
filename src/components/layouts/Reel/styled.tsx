import styled from 'styled-components'

import { BORDER, COLORS, SCALE } from 'styles/variables'

import { IReelContainerProps } from './Reel'

export const ReelContainer = styled.div(
    ({ space, reelHeight, itemWidth }: IReelContainerProps) => `
    display: flex;
    height: ${reelHeight};
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-color: ${COLORS.light} ${COLORS.dark};

    &::-webkit-scrollbar {
        height: 1rem;
    }

    &::-webkit-scrollbar-track {
        background-color: ${COLORS.dark};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${COLORS.dark};
        background-image: linear-gradient(${COLORS.dark} 0, ${COLORS.dark} 0.25rem, ${COLORS.light} 0.25rem, ${COLORS.light} 0.75rem, ${COLORS.dark} 0.75rem);
    }

    > * {
        flex: 0 0 ${itemWidth};
    }

    > img {
        height: 100%;
        flex-basis: auto;
        width: auto;
    }

    > * + * {
        margin-left: ${space};
    }

    &.overflowing {
        padding-bottom: ${space};
    }
`
)
