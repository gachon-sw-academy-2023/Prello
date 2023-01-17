import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DBConfig } from './utils/dbconfig';
import { initDB } from 'react-indexed-db';
import { IndexedDB } from 'react-indexed-db';
import Login from './pages/authorization/login';
import SignUp from './pages/authorization/sign-up';
import routes from './routes';
import Main from './pages/main';
import Board from './pages/board';
import WorkspaceDefault from './pages/workspace/default';
import WorkspaceDetail from './pages/workspace/detail';
import NotFound from './pages/notFound';
initDB(DBConfig);

function App() {
  return (
    <BrowserRouter>
      <IndexedDB
        name="MyDB"
        version={1}
        objectStoresMeta={[
          {
            store: 'people',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
              { name: 'email', keypath: 'email', options: { unique: false } },
              {
                name: 'password',
                keypath: 'password',
                options: { unique: false },
              },
            ],
          },
        ]}
      >
        <Routes>
          <Route path={routes.LOGIN} element={<Login />} />
          <Route path={routes.MAIN} element={<Main />} />
          <Route path={routes.SIGNUP} element={<SignUp />} />
          <Route path={routes.BOARD} element={<Board />} />
          <Route
            path={routes.WORKSPACEDEFAULT}
            element={<WorkspaceDefault />}
          />
          <Route path={routes.WORKSPACEDETAIL} element={<WorkspaceDetail />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </IndexedDB>
    </BrowserRouter>
  );
}

export default App;
