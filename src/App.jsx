import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import Market from './pages/Market'
import Header from './components/Header'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <Header />
      <Nav />
      <div className="contentContainer">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/new' element={<New />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
