import { Box } from 'components/layouts/Box'
import { Stack } from 'components/layouts/Stack'

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ children, ...rest }: ICardProps) => {
    return (
        <Box {...rest}>
            <Stack>{children}</Stack>
        </Box>
    )
}
