import { BORDER, COLORS, SCALE } from 'styles/variables'

import { ImposterContainer } from './styled'

export interface IImposterProps extends React.HTMLAttributes<HTMLDivElement> {
    isBreakout?: boolean
    isFixed?: boolean
    space?: string
}

export const Imposter = ({
    children,
    isBreakout = false,
    isFixed = false,
    space = SCALE.s0,
    ...rest
}: IImposterProps) => {
    return (
        <ImposterContainer
            isBreakout={isBreakout}
            isFixed={isFixed}
            space={space}
            {...rest}
        >
            {children}
        </ImposterContainer>
    )
}
