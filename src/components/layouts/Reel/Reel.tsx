import { useEffect, useRef, useState } from 'react'

import { useWindowSize } from 'hooks/useWindowSize'
import { SCALE } from 'styles/variables'

import { ReelContainer } from './styled'

interface IReelProps extends React.HTMLAttributes<HTMLDivElement> {
    reelHeight?: string
    itemWidth?: string
    noBar?: boolean
    space?: string
}

export interface IReelContainerProps extends IReelProps {}

export const Reel = ({
    children,
    reelHeight = 'auto',
    itemWidth = 'auto',
    noBar = false,
    space = SCALE.s1,
    ...rest
}: IReelProps) => {
    const reelRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const [slideNumber, setSlideNumber] = useState(0)
    const { width: windowWidth, height: windowHeight } = useWindowSize()

    const toggleOverflowClass = (
        elem: React.MutableRefObject<HTMLDivElement>
    ) => {
        reelRef.current.classList.toggle(
            'overflowing',
            reelRef.current.scrollWidth > reelRef.current.clientWidth
        )
    }

    useEffect(() => {
        const childLength = reelRef.current.childNodes.length

        if (slideNumber !== childLength) {
            setSlideNumber(childLength)
        }

        if (reelRef.current) {
            toggleOverflowClass(reelRef)
        }
    }, [reelRef.current, slideNumber, windowHeight, windowWidth])

    return (
        <ReelContainer
            reelHeight={reelHeight}
            itemWidth={itemWidth}
            noBar={noBar}
            ref={reelRef}
            space={space}
            {...rest}
        >
            {children}
        </ReelContainer>
    )
}

// ;(function() {
//     const className = 'reel'
//     const reels = Array.from(document.querySelectorAll(`.${className}`))
//     const toggleOverflowClass = elem => {
//         elem.classList.toggle(
//             'overflowing',
//             elem.scrollWidth > elem.clientWidth
//         )
//     }
//     for (let reel of reels) {
//         if ('ResizeObserver' in window) {
//             new ResizeObserver(entries => {
//                 toggleOverflowClass(entries[0].target)
//             }).observe(reel)
//         }
//         if ('MutationObserver' in window) {
//             new MutationObserver(entries => {
//                 toggleOverflowClass(entries[0].target)
//             }).observe(reel, { childList: true })
//         }
//     }
// })()
