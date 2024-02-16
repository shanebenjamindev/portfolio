import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes'
import { Suspense } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({
    })
  }, [])

  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
