import React from 'react'
import "../styles/icecream.css"
import blackCurrent from "../assets/Black-Currant-Flavour.jpg"
import chocolate from "../assets/chocolate-chip-ice-cream.jpg"
import mint from "../assets/Mint-Chocolate-Chip-Ice-Cream.jpg"
import redVelvet from "../assets/red-velvet-ice-cream.webp"
import oreo from "../assets/ice-cream-oreo-cookie.jpg"
import butterscotch from "../assets/Butterscotch-cookie-dough-ice-cream.jpg"

export default function Icecream() {
  return (
    <div className='icecream'>
        <div className='flavours'>
      <img src={blackCurrent} alt="blackCurrent" width="300px" height="300px"></img>
      <img src={chocolate} alt="chocolate" width="300px" height="300px"></img>
      <img src={mint} alt="mint" width="300px" height="300px"></img>
      <img src={redVelvet} alt="redVelvet" width="300px" height="300px"></img>
      <img src={oreo} alt="oreo" width="300px" height="300px"></img>
      <img src={butterscotch}alt="butterscotch" width="300px" height="300px"></img>
      </div>

    </div>
  )
}