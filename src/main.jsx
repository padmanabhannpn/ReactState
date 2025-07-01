import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoApp from './TODOList.jsx'
import LoginForm from './LoginForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TodoApp /> */}
    <LoginForm />
  </StrictMode>,
)
