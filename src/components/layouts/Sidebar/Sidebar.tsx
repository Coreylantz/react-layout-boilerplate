import { SidebarContainer } from './styled'

import { SCALE } from 'styles/variables'

export interface ISidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    contentMin?: string
    noStretch?: boolean
    side?: 'left' | 'right'
    sideWidth?: string
    space?: string
}

export const Sidebar = ({
    children,
    contentMin = '50%',
    noStretch = false,
    side = 'left',
    sideWidth,
    space = SCALE.s1,
    ...rest
}: ISidebarProps) => {
    return (
        <SidebarContainer
            contentMin={contentMin}
            noStretch={noStretch}
            side={side}
            sideWidth={sideWidth}
            space={space}
            {...rest}
        >
            <div>{children}</div>
        </SidebarContainer>
    )
}
