import { useState } from 'react'
import signIn from './pages/signIn'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element = {<signIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
