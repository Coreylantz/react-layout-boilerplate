import styled from 'styled-components'

import { IGridProps } from './Grid'

export const GridContainer = styled.div(
    ({ space, min }: IGridProps) => `
      display: grid;
      grid-gap: ${space};

      @supports (width: min(${min}, 100%)) {
          grid-template-columns: repeat(auto-fit, minmax(min(${min}, 100%), 1fr));
      }      
    `
)
