
import './header.css'

import logo from "../assets/image1.png"

import lupa from "../assets/image2.png"

import menu from "../assets/image3.png"

function Header() {


  return (
    <>
      <header>
             
             <img width={165} height={100} src={logo} alt="" />
             <div className='menu'>
               <img src={menu} alt="" />
               <p>MENU</p>
             </div>
             <div className='lupa'>
               <div className='lupa_div'>  
               <img width={30} height={30} src={lupa} alt="" />
               <p>Search</p>
               </div>
             </div>
             <div className='login'>
              <p>LOGIN</p>
             </div>
           </header>
     

    </>
  )
}

export default Header
