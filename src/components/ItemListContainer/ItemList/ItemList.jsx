import Item from "../Item/Item"


const ItemList = ( {productos} ) => {
return (
    <div>
    <div>
        {productos.map( (prod) => <Item producto= {prod} key={prod.id}/>  )}
    </div>
    </div>
)
}

export default ItemList