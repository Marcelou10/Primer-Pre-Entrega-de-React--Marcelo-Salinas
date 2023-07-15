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

                    <li>
                        <img className='logos' src="public/images/Logos/logitech.svg" alt="" />
                        <Link className="header__a" to="/Allproducts/logitech">Logitech</Link>
                    </li>

                    <li>
                        <img className='logos' src="public/images/Logos/razer.svg" alt="" />
                        <Link className="header__a" to="/Allproducts/Razer">Razer</Link>
                    </li>

                    <li>
                        <img className='logos' src="public/images/Logos/pulsar.avif" alt="" />
                        <Link className="header__a" to="/Allproducts/Pulsar">Pulsar</Link>
                    </li>

                    <li>
                        <img className='logos' src="public/images/Logos/vaxee.webp" alt="" />
                        <Link className="header__a" to="/Allproducts/Vaxee">Vaxee</Link>
                    </li>

                    <li><img className='logos' src="public/images/Logos/g wolves.webp" alt="" />
                        <Link className="header__a" to="/Allproducts/G-Wolves">G-Wolves</Link></li>
                    <CartWidget/>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
} 
export default Header