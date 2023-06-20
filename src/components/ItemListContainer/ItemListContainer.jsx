import { useState, useEffect } from "react";
import {products} from "../helpers/products";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "./ItemList/ItemList";
const ItemListContainer = ({mensaje}) => {

    const [productos, setProductos] = useState ([]);
    console.log(productos)
    useEffect(() => {
    products()
    .then((res) => {
    setProductos(res)
    })

    }, [])
    
    return (
    <main >
    <div>
    <ItemList productos={productos} />
    </div>
    </main>
    )
} 
export default ItemListContainer