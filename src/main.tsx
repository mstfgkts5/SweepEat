import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Android WebView büzülme hatasını engellemek için global esnekliği zorluyoruz
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    html, body, #root {
      width: 100vw !important;
      height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: auto !important;
      display: flex !important;
      flex-direction: column !important;
      background-color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
