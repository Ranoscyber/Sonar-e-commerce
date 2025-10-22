import { BrowserRouter,Routes,Route } from "react-router-dom"
import RootLayout from "./Layouts/RootLayout"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import ProductDetail from "./Pages/ProductDetail"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App