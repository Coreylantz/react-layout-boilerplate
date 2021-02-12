export const getScale = (
    scale: number,
    ratio: number,
    divide: boolean = false
) => {
    const scaleNumber = (divide ? scale / ratio : scale * ratio).toFixed(2)

    return parseFloat(scaleNumber)
}
