import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './home'
import Login from './login'


const App=()=> {
  return (
<Router>
  <div>
    <Routes>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>

  </Routes>
  </div>
</Router>    
  )
}

export default App
