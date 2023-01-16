import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authorization/login';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
