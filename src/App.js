import './App.css';
import Navigation from './components/Navigation.js';
// import Main from './components/Main';
import Footer from './Footer';
import Player from './Players';
import Detail from '../src/components/Detail'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Player/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>
  )
}


export default App;
