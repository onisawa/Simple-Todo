import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoPage from '@pages/Todo.tsx';
import JobBoardPage from '@pages/JobBoard.tsx';
import ComponentsPage from '@pages/Component.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';

async function deferRender() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/jobs',
    element: <JobBoardPage />
  },
  {
    path: '/components',
    element: <ComponentsPage />
  }
]);

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
})

