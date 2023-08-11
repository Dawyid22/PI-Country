import './App.css'
import { Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'

function App() {

  return (
      <div>
        {location.pathname !== '/' ? <NavBar/> : null}
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Cards/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div>
       
  )
}

export default App
