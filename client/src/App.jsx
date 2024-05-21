import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Appointments from './Appointments'
import CreateAppointment from './CreateAppointment'
import UpdateAppointment from './UpdateAppointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Appointments/>}></Route>
          <Route path='/createAppointment' element={<CreateAppointment/>}></Route>
          <Route path='/updateAppointment/:id' element={<UpdateAppointment/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App