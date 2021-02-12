import { MEASURE, SCALE } from 'styles/variables'

import { CoverContainer } from './styled'

export interface ICoverProps extends React.HTMLAttributes<HTMLDivElement> {
    centeredSelector?: string
    minHeight?: string
    noPad?: boolean
    space?: string
}

export const Cover = ({
    centeredSelector = 'h1',
    children,
    minHeight = '100vh',
    noPad,
    space = SCALE.s1,
    ...rest
}: ICoverProps) => {
    return (
        <CoverContainer
            centeredSelector={centeredSelector}
            minHeight={minHeight}
            noPad={noPad}
            space={space}
            {...rest}
        >
            {children}
        </CoverContainer>
    )
}
