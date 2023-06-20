

const ItemDetail = ( {item}) => {
  return (
    <div>
        <div className="products">
        <img className="products__img" src={item.image} alt={item.title} />
        <div>
            <h1 className="products__title"> {item.title}</h1>
            <p className="products__precio"> ${item.price}</p>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail