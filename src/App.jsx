import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Pedicure from './components/Pedicure.jsx';
import Menicure from './components/Manicure.jsx';
import Eyelash from './components/Eyelash.jsx';
import Microblading from './components/Microblading.jsx';
import Nails from './components/Nails.jsx';
import Borow from './components/Borow.jsx';
import Lash from './components/Lash.jsx';
import Tatto from './components/Tatto.jsx';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/pedicure' element={<Pedicure />} />
        <Route path='/menicure' element={<Menicure />} />
        <Route path='/eyelash' element={<Eyelash />} />
        <Route path='/microblading' element={<Microblading />} />
        <Route path='/nails' element={<Nails />} />
        <Route path='/borowlinting' element={<Borow />} />
        <Route path='/lashlinting' element={<Lash />} />
        <Route path='/tatto' element={<Tatto />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
