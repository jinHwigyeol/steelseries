import { Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Header from './com/Header'
import Footer from './com/Footer'
import Main from './com/Main'
import Headset from './com/Headset'
import Mouse from './com/Mouse'
import Keyboard from './com/Keyboard'
import Speaker from './com/Speaker'
import Pad from './com/Pad'
import Login from './com/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Headset" element={<Headset />}></Route>
        <Route path="/Mouse" element={<Mouse />}></Route>
        <Route path="/Keyboard" element={<Keyboard />}></Route>
        <Route path="/Speaker" element={<Speaker />}></Route>
        <Route path="/Pad" element={<Pad />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
