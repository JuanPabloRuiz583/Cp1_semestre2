import '../Principal/principal.css'
import im from '../Principal/Imagens/image1.png'
import image from '../Principal/Imagens/image2.png'
import imagem from '../Principal/Imagens/image5.png'
import like from '../Principal/Imagens/image3.png'
import dislike from '../Principal/Imagens/image6.png'
import tres_ponto from '../Principal/Imagens/image0.png'
import seta from '../Principal/Imagens/image.png'

function Principal()  {


    return (
      <>
      <section>      
      <section className='enredo'> 
  <div className='div_principal'>
         <img src={im} />
        <h1>ENREDO</h1>
      </div>
      <div className='div_pricipal_p'> 
        <p>Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.</p>
     </div> 
     </section>

      <section>    
      <div className='div_pricipal2'>
        <div className='avaliauser'>  
        <img src={im} />
        <h1>AVALIAÇOES DE USUARIOS</h1>
        </div>
        <div className='avaliar'>
          <img src={image} />
          <h1 className='cor'>avaliar</h1>
        </div>
      </div>

      <section className='quadrado'>
        <div className='blog'>  
       <div className='vermelho'>
        <h1>AVALIACAO EM DESTAQUE</h1>
       </div>
       <div className='blogg'> 
       <img width={20}  src={imagem} />
       <p>10/10</p>
       </div>
       </div>
      

       <div className='blog'>  
       <div>
        <p className='cor_clara'>CaioHalbert</p>
       </div>
       <div className='blog'> 
       <p>9 de novembro de 2022</p>
       </div>
       </div>

       <div>
        <div className='texto'>
           
          <h1 className='fonte2'>What an incredible sequel!</h1>
          <p> A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns, or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent roles.</p>
          
          <p>I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend you start with God of War 2018 If you have the dedication, you could always start from the very first one. They're all on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible: Ragnarök is here and it is beautiful.</p>
          
        </div>

          <div className='likes_dislikes'>
            <div className='likes'> 
            <img height={23} src={like} />
            <p>33</p>
            </div>

            <div className='likes'> 
            <img height={23} src={dislike} />
            <p>11</p>
            </div>

              
            <img height={24} src={tres_ponto} />

          </div>
       </div>

      </section>





      <section className='quadrado2'>
      <div className='blog'>  
       <div className='vermelho'>
        <h1>AVALIACAO EM DESTAQUE</h1>
       </div>
       <div className='blogg'> 
       <img width={20}  src={imagem} />
       <p>10/10</p>
       </div>
       </div>

       <div className='blog'>  
       <div>
        <p className='cor_clara'>ClaudiaRayara</p>
       </div>
       <div className='blog'> 
       <p>14 de novembro de 2022</p>
       </div>
       </div>

       <div className='spoiler'>
        <div className='spoiler0'>
          <h2 className='fonte3'>This game took part of my soul...</h2>
        </div>
        <div className='spoiler1'>
          <h1 className='cor'>Warning: Spoilers!</h1>
          <img src={seta} height={10} />
        </div>
       </div>
       <div className='likes_dislikes'>
            <div className='likes'> 
            <img height={23} src={like} />
            <p>24</p>
            </div>

            <div className='likes'> 
            <img height={23} src={dislike} />
            <p>6</p>
            </div>

              
            <img height={24} src={tres_ponto} />

          </div>




      </section>
      </section>










      </section>
     
     
    </>
    )
  }
  
  export default Principal
  