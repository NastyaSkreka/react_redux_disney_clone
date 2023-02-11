import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
            <Routes> 
                <Route path="detail/:id" element={<Detail/>} /> 
                <Route path="login" element={<Login/>} /> 
                <Route path="/" element={<Home/>} /> 
            </Routes>     
      <Footer/> 
    </div>
  );
}

export default App;
