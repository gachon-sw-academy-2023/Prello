import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authorization/login';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
