import styled from 'styled-components'

import { IClusterProps } from './Cluster'

export const ClusterContainer = styled.div(
    ({ align, justify, space }: IClusterProps) => `
      overflow: hidden;

      > * {
        display: flex;
        align-items: ${align};
        justify-content: ${justify};
        margin: calc(${space} / 2 * -1);
        flex-wrap: wrap;

        > * {
          margin: calc(${space} / 2);
        }
      }
    `
)
