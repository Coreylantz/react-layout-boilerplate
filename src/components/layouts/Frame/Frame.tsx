import { FrameContainer } from './styled'

interface IFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    aspectRatio?: string
}

export interface IFrameContainerProps {
    numerator: string
    denominator: string
}

export const Frame = ({
    aspectRatio = '16:9',
    children,
    ...rest
}: IFrameProps) => {
    const aspect = aspectRatio.split(':')
    const denominator = aspect[0]
    const numerator = aspect[1]

    return (
        <FrameContainer
            denominator={denominator}
            numerator={numerator}
            {...rest}
        >
            {children}
        </FrameContainer>
    )
}
