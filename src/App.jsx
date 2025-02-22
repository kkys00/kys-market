import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
