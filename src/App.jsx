import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap-icons/font/bootstrap-icons.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Init from "./components/Init/init";
import Footer from "./footer/Footer";



function App() {


  return (

      <div>
        <BrowserRouter>
        
        
        <Header />
        <Routes>
        <Route path="/" element={<Init/>} />
        <Route path="/inicio" element={<Init/>} />
        <Route path="/Allproducts" element={<ItemListContainer/>} /> 
        <Route path="/item/:id" element={<ItemDetailContainer  />} />
        <Route path="/Allproducts/:categoria" element={<ItemListContainer/>} />

        </Routes>
        <Footer/>
        
        
        </BrowserRouter>
      </div>


  )
}

export default App
