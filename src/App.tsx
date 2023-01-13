import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Board from './pages/board';
import WorkspaceDefault from './pages/workspace/default';
import WorkspaceDetail from './pages/workspace/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.BOARD} element={<Board />} />
        <Route path={routes.WORKSPACEDEFAULT} element={<WorkspaceDefault />} />
        <Route path={routes.WORKSPACEDETAIL} element={<WorkspaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
