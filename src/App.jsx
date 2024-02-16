import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import NavbarMenu from "./components/NavberMenu/NavbarMenu"
import { createContext, useState } from "react"
import Register from "./pages/Register/Register"
import Login from "./pages/Sign In/Login"
import Footer from "./components/Footer/Footer"

export const StateContext = createContext()


function App() {
const [showMenu, setShowMenu] = useState(false)

  return (
    <StateContext.Provider value={{setShowMenu, showMenu}}>
    <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
      <Footer />
    </StateContext.Provider>
  )
}

export default App
