
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import {useEffect,useState}  from "react";


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };
  return (
  
      <Router>
      <div className="App">
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fav' element={<Favs/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer />
        </div>
          </Router>
      
  );
}

export default App;
