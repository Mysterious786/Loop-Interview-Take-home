import { Route,Routes } from 'react-router-dom'
import './App.scss'
import Login from './component/login-page/login-page.component'
import Home from './component/home/home.component'
function App() {
 return( 
 <Routes>
  
  <Route  path='/' element={<Login/>}/>
  <Route path="/landing-page" element={<Home/>}/>
 </Routes>
    
  )
}

export default App
