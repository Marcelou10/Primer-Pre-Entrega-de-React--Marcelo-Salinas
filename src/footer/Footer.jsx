import '../footer/Footer.scss'

const Footer = () => {
  return (
    <footer className='ft'> 
    <div className="titulo">
        <h4>Nuestras Redes Sociales</h4>
    </div>
    <div className="redes">
        <span className="ig"><i class="bi bi-instagram"></i></span>
        <span className="fb"><i class="bi bi-facebook"></i></span>
        <span className="tw"><i class="bi bi-twitter"></i></span>
    </div>
    <div className="derechos">
    <p>Copyright©2023 PeriExport. All right reserved Terms of Service Privacy Policy</p>
    </div>
    </footer>
  )
}

export default Footer