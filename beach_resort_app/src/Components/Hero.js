import React from "react"

function Hero({children, hero}) {
  return (
  <header className={hero}>
    {children}

  </header>
  )
}



export default Hero;


//set the value that prop hero has, used for className
Hero.defaultProps = {
  hero: "defaultHero"
}
