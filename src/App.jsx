import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { Layout } from './layout/Layout';
import { AddUser } from './pages/AddUser';
import { Home } from './pages/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='addUser' element={<AddUser /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
