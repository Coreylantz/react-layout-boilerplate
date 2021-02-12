import { MEASURE } from 'styles/variables'

import { CenterContainer } from './styled'

export interface ICenterProps extends React.HTMLAttributes<HTMLDivElement> {
    centerText?: boolean
    guttersWidth?: string
    intrinsic?: boolean
    max?: string
}

export const Center = ({
    centerText,
    children,
    guttersWidth = '0',
    intrinsic,
    max = MEASURE,
    ...rest
}: ICenterProps) => (
    <CenterContainer
        centerText={centerText}
        guttersWidth={guttersWidth}
        intrinsic={intrinsic}
        max={max}
        {...rest}
    >
        {children}
    </CenterContainer>
)
