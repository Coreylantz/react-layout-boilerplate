import { SCALE } from 'styles/variables'

import { IconContainer } from './styled'

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
    iconId: string
    side?: 'left' | 'right'
    space?: string
    text?: string
}

export const Icon = ({
    side = 'left',
    space = SCALE['s-2'],
    text = '',
    iconId = '',
}: IIconProps) => {
    const SVG = () => (
        <svg>
            <use xlinkHref={`#${iconId}`}></use>
        </svg>
    )

    return (
        <IconContainer
            iconId={iconId}
            space={space}
            dir={side === 'left' ? 'ltr' : 'rtl'}
        >
            <SVG />
            {text}
        </IconContainer>
    )
}
