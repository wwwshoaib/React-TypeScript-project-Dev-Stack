
import { ToastContainer } from 'react-toastify/unstyled'
import './App.css'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import Technologies from './components/Technologies/Technologies'

function App() {
  

  return (
    <>
     
     <Nav />
     <Banner />
     <Technologies/>
      <ToastContainer />
    </>
  )
}

export default App
