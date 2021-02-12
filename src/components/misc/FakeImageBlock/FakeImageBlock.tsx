interface IFakeImageBlockProps {
    height?: number
    width?: number
}

export const FakeImageBlock = ({
    width = 200,
    height = 200,
}: IFakeImageBlockProps) => (
    <img src={`https://dummyimage.com/${width}x${height}/000/fff`} alt="" />
)
