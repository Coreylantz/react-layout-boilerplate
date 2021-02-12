import { SCALE } from 'styles/variables'

import { GridContainer } from './styled'

export interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
    min?: string
    space?: string
}

export const Grid = ({
    children,
    min = '250px',
    space = SCALE.s1,
    ...rest
}: IGridProps) => {
    return (
        <GridContainer min={min} space={space} {...rest}>
            {children}
        </GridContainer>
    )
}
