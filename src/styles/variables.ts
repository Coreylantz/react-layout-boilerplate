import { getScale } from './utils'

// Measure
export const MEASURE = '60ch'

// Scales & Ratio
export const RATIO = 2
const SCALE_0 = 1
const SCALE_NEG_1 = getScale(SCALE_0, RATIO, true)
const SCALE_NEG_2 = getScale(SCALE_NEG_1, RATIO, true)
const SCALE_NEG_3 = getScale(SCALE_NEG_2, RATIO, true)
const SCALE_NEG_4 = getScale(SCALE_NEG_3, RATIO, true)
const SCALE_NEG_5 = getScale(SCALE_NEG_4, RATIO, true)
const SCALE_1 = getScale(SCALE_0, RATIO)
const SCALE_2 = getScale(SCALE_1, RATIO)
const SCALE_3 = getScale(SCALE_2, RATIO)
const SCALE_4 = getScale(SCALE_3, RATIO)
const SCALE_5 = getScale(SCALE_4, RATIO)

export const SCALE = {
    's-5': `${SCALE_NEG_5}rem`,
    's-4': `${SCALE_NEG_4}rem`,
    's-3': `${SCALE_NEG_3}rem`,
    's-2': `${SCALE_NEG_2}rem`,
    's-1': `${SCALE_NEG_1}rem`,
    s0: `${SCALE_0}rem`,
    s1: `${SCALE_1}rem`,
    s2: `${SCALE_2}rem`,
    s3: `${SCALE_3}rem`,
    s4: `${SCALE_4}rem`,
    s5: `${SCALE_5}rem`,
}

// Border
export const BORDER = {
    thick: SCALE['s-2'],
    thin: SCALE['s-5'],
}

// Colors
export const COLORS = {
    dark: '#050505',
    darkish: '#404040',
    light: '#fafafa',
    lightish: '#e6e6e6',
    mid: '#808080',
}
