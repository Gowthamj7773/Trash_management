import { useState } from 'react'
import Navigator from './Navigation/Navigator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navigator/>
  )
}

export default App
