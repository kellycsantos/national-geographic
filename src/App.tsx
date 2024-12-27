import { useEffect } from 'react'
import './App.scss'
import Navbar from './components/navbar'
import Slider from './components/sliderControler'

function App() {
  useEffect(() => {
  },[])

  return (
    <>
      <Navbar />
      <main>
        <Slider />
      </main>
    </>
  )
}

export default App
