import { MEASURE, SCALE } from 'styles/variables'

import { SwitcherContainer } from './styled'

export interface ISwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
    threshold?: string
    space?: string
    limit?: number
}

export const Switcher = ({
    children,
    limit = 4,
    space = SCALE.s1,
    threshold = MEASURE,
    ...rest
}: ISwitcherProps) => {
    return (
        <SwitcherContainer
            limit={limit}
            space={space}
            threshold={threshold}
            {...rest}
        >
            <div>{children}</div>
        </SwitcherContainer>
    )
}
