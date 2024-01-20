import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout/Layout.component'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home/Home.component'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
