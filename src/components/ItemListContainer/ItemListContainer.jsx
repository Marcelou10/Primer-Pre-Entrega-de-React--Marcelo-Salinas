import './ItemListContainer.scss'
const ItemListContainer = ({mensaje}) => {

    return (
            <main className="main">
            <div className="main__box">
                <h2 className="header__title">PeriExport</h2>
                <hr />
                <p>{mensaje}</p>
            </div>
        </main>
    )
} 
export default ItemListContainer