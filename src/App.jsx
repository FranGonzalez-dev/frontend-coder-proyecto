import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './router/AppRouter';
import { Container, Navbar } from './layout'

function App() {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <Navbar />
                <Container>
                    <AppRouter />
                </Container>
            </BrowserRouter>
        </Provider>
    )
}

export default App
