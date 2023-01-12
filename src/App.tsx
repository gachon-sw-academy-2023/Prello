import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Button from '@/components/Button/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        {count > 0 ? (
          <p>
            <code>The count is now: {count}</code>
          </p>
        ) : null}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <div style={{ padding: '1rem 2rem' }}>
        <Button size="sm" color="primary">
          sm primary
        </Button>
        <br />
        <Button>md primary</Button>
        <br />
        <Button color="secondary" size="lg">
          lg secondary
        </Button>
      </div> */}
    </div>
  );
}

export default App;
