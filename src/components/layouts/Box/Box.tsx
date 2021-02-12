import { BORDER, COLORS, SCALE } from 'styles/variables'

import { BoxContainer } from './styled'

export interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    borderWidth?: string
    darkColor?: string
    lightColor?: string
    padding?: string
    invert?: boolean
}

export const Box = ({
    borderWidth = BORDER.thin,
    children,
    darkColor = COLORS.dark,
    invert = false,
    lightColor = COLORS.light,
    padding = SCALE.s1,
    ...rest
}: IBoxProps) => {
    return (
        <BoxContainer
            borderWidth={borderWidth}
            darkColor={darkColor}
            invert={invert}
            lightColor={lightColor}
            padding={padding}
            {...rest}
        >
            {children}
        </BoxContainer>
    )
}
