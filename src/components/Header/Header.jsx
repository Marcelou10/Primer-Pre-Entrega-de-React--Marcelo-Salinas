import { Link } from 'react-router-dom'
import CartWidget from '../Cartwidget/CartWidget'
import './Header.scss'
const Header = () => {

    return (
            <header className="header">
            <div className="header__box">
                <Link className="header__title" to="/"><h1>PeriExport</h1></Link>

                <nav className="header__nav">
                    <ul className='header__ul'>
                    <li><Link className="header__a" to="/inicio">Home</Link></li>
                    <li><Link className="header__a" to="/Allproducts">All Products</Link></li>
                    <li><Link className="header__a" to="/item/id:">Logitech</Link></li>
                    <li><Link className="header__a" to="/Razer">Razer</Link></li>
                    <li><Link className="header__a" to="/Pulsar">Pulsar</Link></li>
                    <li><Link className="header__a" to="/Vaxee">Vaxee</Link></li>
                    <li><Link className="header__a" to="/G-Wolves">G-Wolves</Link></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
} 
export default Header