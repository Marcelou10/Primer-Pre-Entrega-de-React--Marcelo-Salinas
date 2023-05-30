import CartWidget from '../Cartwidget/CartWidget'
import './Header.scss'
const Header = () => {

    return (
            <header className="header">
            <div className="header__box">
                <h1 className="header__title">PeriExport</h1>

                <nav className="header__nav">
                    <a className="header__a" href="#">Inicio</a>
                    <a className="header__a" href="#">Productos</a>
                    <a className="header__a" href="#">Contacto</a>
                </nav>
            </div>
            < CartWidget />
        </header>
    )
} 
export default Header