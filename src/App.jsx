import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap-icons/font/bootstrap-icons.scss'



function App() {


  return (

      <div>
        <Header />
        < ItemListContainer mensaje="Hola mundo" />
      </div>


  )
}

export default App
