import logo from './logo.svg';
import './App.css';
import Additem from './components/Additem';
import Search from './components/Search';
import Viewall from './components/Viewall';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Additem/>}/>
      <Route path='/s' element={<Search/>}/>
      <Route path='/d' element={<Delete/>}/>
      <Route path='/v' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
