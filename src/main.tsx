import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyled from './global-styled.ts'
import Cadastro from './routes/Cadastro/index.tsx'
import ChatBot from './routes/ChatBot/index.tsx'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Login from './routes/Login/index.tsx'
import Servicos from './routes/Servicos/index.tsx'
import Suporte from './routes/Suporte/index.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/servicos',
        element: <Servicos />
      },
      {
        path: '/suporte',
        element: <Suporte />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/chatbot',
        element: <ChatBot />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
    <GlobalStyled />
  </StrictMode>,
)
