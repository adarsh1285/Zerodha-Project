
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Footer from './landing_page/Footer'
import Navbar from './landing_page/Navbar'

import Singup from './landing_page/signup/Singup'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/products/ProductPage'
import AboutPage from './landing_page/about/AboutPage'
import HomePage from './landing_page/home/HomePage'
import NotFoundpage from './landing_page/NotFoundpage'
import PricingPage from './landing_page/pricing/PricingPage'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><HomePage /></>
    },
    {
      path: "/signup",
      element: <><Navbar /><Singup /></>
    },
    {
      path: "/support",
      element: <><Navbar /><SupportPage /></>
    },
    {
      path: "/products",
      element: <><Navbar /><ProductPage /></>
    },
    {
      path: "/pricing",
      element: <><Navbar /><PricingPage /></>
    },
    {
      path: "/about",
      element: <><Navbar /><AboutPage /></>
    },
    {
      path: "*",
      element: <><Navbar /><NotFoundpage/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
