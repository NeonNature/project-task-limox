import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Screen_InfoPlain from './screens/Screen_InfoPlain'
import Screen_InfoSlider from './screens/Screen_InfoSlider'
import Screen_Links from './screens/Screen_Links'
import Screen_Main from './screens/Screen_Main'
import Screen_Options from './screens/Screen_Options'
import Screen_RequestBooking from './screens/Screen_RequestBooking'
import Screen_RequestExclusive from './screens/Screen_RequestExclusive'
import Screen_RequestService from './screens/Screen_RequestService'
import Screen_Slider from './screens/Screen_Slider'

function App() {
  return (
    <>
      <Navbar />
      <Screen_Main />
      <Screen_InfoPlain />
      <Screen_RequestBooking />
      <Screen_Slider />
      <Screen_RequestExclusive />
      <Screen_Links />
      <Screen_InfoSlider />
      <Screen_Options />
      <Screen_RequestService />
      <Footer />
    </>
  )
}

export default App
