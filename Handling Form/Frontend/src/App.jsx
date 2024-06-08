import { useState } from 'react'

import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Handling Form
      </h1>
      <Form/>
    </>
  )
}

export default App
