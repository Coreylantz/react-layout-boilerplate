import styled from 'styled-components'

import { IFrameContainerProps } from './Frame'

export const FrameContainer = styled.div(
    ({ denominator, numerator }: IFrameContainerProps) => `
      padding-bottom: calc(${numerator} / ${denominator} * 100%);
      position: relative;

      > * {
        align-items: center;
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
      }
      
      > img,
      > video {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    `
)
