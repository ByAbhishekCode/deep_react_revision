import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import GenNUmCol from './gen_num_colo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GenNUmCol></GenNUmCol>
      <GenNUmCol></GenNUmCol>
      <GenNUmCol></GenNUmCol>
      <GenNUmCol></GenNUmCol>
      <GenNUmCol></GenNUmCol>
      <GenNUmCol></GenNUmCol>
    </>
  )
}

export default App
