import { useState, useEffect } from "react";
import {products} from "../helpers/products";
import '../ItemListContainer/ItemListContainer.scss'
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState ([]);
    const categoria = useParams().id;
    console.log(categoria)


    useEffect(() => {
    products()
    .then((res) => {
        if (categoria) {
            setProductos(res.filter((prod) => prod.categoria === categoria))
        } else {
            setProductos(res)
        }
    
    })

    }, [categoria])
    
    return (
    <main >
    <div>
    <ItemList productos={productos} />
    </div>
    </main>
    )
} 
export default ItemListContainer