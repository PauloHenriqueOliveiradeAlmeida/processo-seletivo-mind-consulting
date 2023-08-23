import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from '../node_modules/react-router-dom/dist/index'
import App from './App'
import CadastrarCurso from './cadastrarCurso'
import CriarConta from './criarConta'
import './index.css'
import Login from './login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cadastrar-professor",
    element: <CriarConta/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cadastrar-cursos",
    element: <CadastrarCurso/>
  },
  {
    path: "/dashboard",
    element: <></>
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
