import { SCALE } from 'styles/variables'
import { alignCSSType, justifyCSSType } from 'types'

import { ClusterContainer } from './styled'

export interface IClusterProps extends React.HTMLAttributes<HTMLDivElement> {
    align?: alignCSSType
    justify?: justifyCSSType
    space?: string
    isList?: boolean
}

export const Cluster = ({
    align = 'center',
    children,
    justify = 'center',
    space = SCALE.s1,
    isList,
    ...rest
}: IClusterProps) => {
    return (
        <ClusterContainer
            align={align}
            justify={justify}
            space={space}
            {...rest}
        >
            {!isList ? <div>{children}</div> : <ul>{children}</ul>}
        </ClusterContainer>
    )
}
