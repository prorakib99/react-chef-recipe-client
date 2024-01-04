import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pageLayout/Main.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Recipe from './pages/Recipe/Recipe.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'chef/:id',
        element: <Recipe></Recipe>,
        loader: ({ params }) => fetch(`https://react-chef-recipe-server.vercel.app/chef/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
