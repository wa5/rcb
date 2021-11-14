import { Greenbutton, Redbutton } from "./components/buttons"
import Home from "./pages/Home/Home"

import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App(){
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

</Routes>
      </Router>

    </div>
 
  )
}


export default App