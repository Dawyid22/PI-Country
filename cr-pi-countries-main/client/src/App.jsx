import './App.css'
import { Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import Activities from './components/Activities/Activities'
import { useLocation } from 'react-router-dom'

function App() {
 const location = useLocation()
  return (
      <div className='app_main'>
        {location.pathname !== '/' ? <NavBar/> : null}
        <div>
          
        </div>
        
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Cards/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/activities' element={<Activities/>}/>
        </Routes>
      </div>
       
  )
}

export default App
