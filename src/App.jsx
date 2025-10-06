import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Product from "./components/product"
import Brand from "./components/brand"
import News from "./components/news"
import About from "./components/about"
import Subscribe from "./components/subscribe"

function App(){
  return (
    <React.Fragment>

    <Header />
    <Product />
    <Brand />
    <News />
    <About />
    <Subscribe />
    <Footer />

    </React.Fragment>
  )
}

export default App