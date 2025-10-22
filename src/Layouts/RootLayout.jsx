import { Outlet } from "react-router-dom"
import TopBar from "../Components/TopBar"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

function RootLayout() {
  return (
    <>
        <TopBar/>
        <Header/>

        <Outlet/>

        <Footer/>
    </>
  )
}

export default RootLayout