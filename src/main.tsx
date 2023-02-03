import React from 'react';
import './static/fonts/font.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from './styles/GlobalStyle';
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browsers');
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
