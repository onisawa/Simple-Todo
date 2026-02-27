import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './contexts/todo/index.tsx'

async function deferRender() {
  if (import.meta.env.PROD) return;

  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </StrictMode>,
  )
})

