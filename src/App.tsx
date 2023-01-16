import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Main from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.MAIN} element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
