import '../src/Styles/Intro.css'
import './App.css'
import { Introduccion, Details } from './components/intro.jsx'
import ButtonsLinks from './components/Download.jsx'
import { CardStyle } from './components/Card.jsx'

function App() {

  return (
    <>
    <section className='section1'>
        <div>
        <Introduccion/>
    </div>
    </section>
    <br />
    <section>
      <ButtonsLinks/>
    </section>
 
        <br />
    <section className="logos">
      <img src="/Logos/Bootstrap_logo.svg.png" alt="Bootstrap" className="logo" />
      <img src="/Logos/Logo_C_sharp.svg.png" alt="C#" className="logo" />
      <img src="/Logos/logo-javascript-1024.png" alt="JavaScript" className="logo" />
      <img src="/Logos/Microsoft_.NET_logo.svg.png" alt=".NET" className="logo" />
      <img src="/Logos/mysql.png" alt="MySQL" className="logo" />
      <img src="/Logos/react.png" alt="React" className="logo" />
      <img src="/Logos/Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" className="logo" />
      <img src="/Logos/github-icon-logo-png_seeklogo-503247.png" alt="Tailwind CSS" className="logo" />
      <img src="/Logos/Git_icon.svg.png" alt="Tailwind CSS" className="logo" />

    </section>
    <Details/>


    <section>
      <div >
       <CardStyle
        imagenes={["/img/RestLogin.png", "/img/RestInicio.png", "/img/RestAdmin.png"]}
        titulo="Sistema para Restaurantes"
        descripcion="sistema realizado para la gestion de restaurantes donde
        se incluyen funciones utiles como pagos con paypal, gestion de pedidos y ordenes
        gestion de personal del restaurante, gestion del inventario del local, ademas de 
        importacion a excel y pdf para tener un mejor control de los reportes de cada apartado"
        tecnologias="C#, .NET, Javascript, bootstrap"
      />
      </div>
    </section>


    </>



    
    
  )
}

export default App
