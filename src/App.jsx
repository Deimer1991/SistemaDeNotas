import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <Footer />
    </>
  )
}

export default App

