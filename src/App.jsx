import { useState } from 'react'
import Route from "./Routes/Index"
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  )
}

export default App
