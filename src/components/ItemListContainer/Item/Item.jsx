import '../Item/Item.scss'

const Item = ({producto}) => {
return (

<div className="products">

<img className="products__img" src={producto.image} alt="" />

<h1 className="products__title">{producto.title}</h1>

<p className="products__precio">Precio: ${producto.price}</p>

<button className="products__button" href={`/item/${producto.id}`}>Comprar Ahora</button>

</div>


)
}

export default Item