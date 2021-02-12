import { ReactComponent as CommonIcons } from 'assets/icons/common-icons.svg'
import { Home } from 'components/pages/Home'
import { GlobalStyles } from 'styles/globalStyles'

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <CommonIcons />
            <Home />
        </>
    )
}
