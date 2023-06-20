import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap-icons/font/bootstrap-icons.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Init from "./components/Init/init";
import Razer from "./Razer/Razer";
import Pulsar from "./Pulsar/Pulsar";
import Vaxee from "./Vaxee/Vaxee";
import GWolves from "./G-Wolves/GWolves";
import CartWidget from "./components/Cartwidget/CartWidget";



function App() {


  return (

      <div>
        <BrowserRouter>
        
        
        <Header />
        <CartWidget/>
        <Routes>
        <Route path="/" element={<Init/>} />
        <Route path="/inicio" element={<Init/>} />
        <Route path="/Allproducts" element={<ItemListContainer/>} /> 
        <Route path="/item/id:" element={<ItemDetailContainer  />} />
        <Route path="/Razer" element={<Razer/>} />
        <Route path="/Pulsar" element={<Pulsar/>} />
        <Route path="/Vaxee" element={<Vaxee/>} />
        <Route path="/G-Wolves" element={<GWolves/>} />
        </Routes>
        
        
        </BrowserRouter>
      </div>


  )
}

export default App
