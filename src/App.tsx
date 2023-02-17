import { IndexedDB, initDB } from 'react-indexed-db';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/authorization/login';
import SignUp from './pages/authorization/sign-up';
import Board from './pages/board';
import Main from './pages/main';
import Inform from './pages/util';
import WorkspaceDefault from './pages/workspace/default';
import WorkspaceDetail from './pages/workspace/detail';
import WorkspaceSetting from './pages/workspace/setting';
import routes from './routes';
import { DBConfig } from './utils/dbconfig';
import { useAxiosInterceptor } from './utils/useAxiosInterceptor';
initDB(DBConfig);

function App() {
  useAxiosInterceptor();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.MAIN} element={<Main />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />
        <Route path={routes.BOARD} element={<Board />} />
        <Route path={routes.WORKSPACEDEFAULT} element={<WorkspaceDefault />} />
        <Route path={routes.WORKSPACEDETAIL} element={<WorkspaceDetail />} />
        <Route path={routes.WORKSPACESETTING} element={<WorkspaceSetting />} />
        <Route
          path={'*'}
          element={
            <Inform message={'권한이 없거나 존재하지 않는 페이지입니다.'} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
