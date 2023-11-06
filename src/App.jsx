import { Route, Routes } from "react-router-dom";

import './App.css'
import Cart from './Cart'
import Home from './Home'
import Layout from './Layout'

function App() {

  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
