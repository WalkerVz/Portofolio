import Header from "./components/header"
import Navigation from "./components/navigasi"
import Profile from "./components/profile"
import Banner from "./components/banner"
import Portofolio from "./components/portofolio"
import Footer from "./components/footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portofolio />
      <Footer />
    </div>
  )
}

export default App
