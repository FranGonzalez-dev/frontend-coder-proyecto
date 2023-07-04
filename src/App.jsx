import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import { Container, Navbar } from './layout'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container>
                <AppRouter />
            </Container>
        </BrowserRouter>
    )
}

export default App
