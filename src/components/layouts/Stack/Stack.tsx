import { SCALE } from 'styles/variables'

import { StackContainer } from './styled'

export interface IStackProps extends React.HTMLAttributes<HTMLDivElement> {
    recursive?: boolean
    space?: string
    splitAfter?: number
}

export const Stack = ({
    children,
    recursive = false,
    space = SCALE.s1,
    splitAfter,
    ...rest
}: IStackProps) => {
    return (
        <StackContainer
            recursive={recursive}
            space={space}
            splitAfter={splitAfter}
            {...rest}
        >
            {children}
        </StackContainer>
    )
}
