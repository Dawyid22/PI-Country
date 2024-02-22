import './App.css'
import { Route, Routes} from 'react-router-dom'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'
import Activities from './components/Activities/Activities'


function App() {
  return (
      <div className='app_main'>
         <NavBar/> 
        <Routes>
          <Route path='/' element={<Cards/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/activities' element={<Activities/>}/>
        </Routes>
      </div>
       
  )
}

export default App
