
import './App.css'
import Header from './Componentes/Header'
import Principal from './Componentes/Principal/principal'
import Footer from './Componentes/Footerr/Footer'

function App() {
  

  return (
    <>
    <Header />
    
    <article>    
    <h1 className='fonte'>GOD OF WAR: RAGNAROK</h1>
    <div>
      <p className='fonte1'>AVALIAÇÃO DA RATINGS</p>
      <div className='alinhar'> 
      <img height={24} src="../src/assets/image5.png" alt="" />
      <p>9,6/10</p>
      </div>
    </div>
    <div>
      <p className='fonte1'>SUA AVALIAÇÃO</p>

      <div className='alinhar'>  
      <img height={24} src="../src/assets/image.png" alt="" />
      <p>Avaliar</p>
      </div>
    </div>
    </article>

    <figure>
      <img height="400px" width="400px" src="../src/assets/tela.png" alt="" />
      <img height="400px" width="600px" src="../src/assets/image4.png" alt="" />
    </figure>
    <Principal/>
    <Footer/>
    </>
  )
}

export default App
