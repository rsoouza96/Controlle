import TransactionsList from './components/transactionsList'
import FiltersContainer from './components/filtersContainer'
import { GlobalStyles } from './globalStyles'

function App() {
    return (
        <>
            <GlobalStyles />
            <FiltersContainer />      
            <TransactionsList />
        </>
    )
}

export default App
