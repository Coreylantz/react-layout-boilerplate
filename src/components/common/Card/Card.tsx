import { Box } from 'components/layouts/Box'
import { IBoxProps } from 'components/layouts/Box/Box'
import { Stack } from 'components/layouts/Stack'

export const Card = ({ children, ...rest }: IBoxProps) => {
    return (
        <Box {...rest}>
            <Stack>{children}</Stack>
        </Box>
    )
}
