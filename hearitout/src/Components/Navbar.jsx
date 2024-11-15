import React from 'react'
const Navbar = () => {
  return (
<nav class="navbar bg-body-tertiary" style={{position:'fixed', top:'0px', left:'0', zIndex:'10', width:'100vw',height: '60px', display:'flex', justifyContent:'center' , alignItems:'center', boxShadow:'0px 6px 10px rgba(0, 0, 0, 0.08)'}}  >
  <div class="d-flex justify-content-center" style={{cursor:'pointer'}}>   
      <img src='/logo-final-35 2.png'  alt="hearItOutLogo" width ='97px' height = '44.92px' style={{}}/>
  </div>
</nav>
  )
}

export default Navbar