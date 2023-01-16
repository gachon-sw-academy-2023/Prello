import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authorization/login';
import SignUp from './pages/authorization/sign-up';
import routes from './routes';
import Main from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.MAIN} element={<Main />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
