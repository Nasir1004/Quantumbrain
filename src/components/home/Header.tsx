import Navbar from "./Navbar"

interface Iprops {
  canStick: boolean
}

const Header = ({canStick=true}: Iprops) => {
  return (
    <header className="fixed max-container padding-container py-9 lg:pt-[3.75rem] lg:pb-11 w-full bg-[linear-gradient(0deg,_#011B23_0%,_#011B23_100%)] z-30">
        <Navbar canStick={canStick} />
    </header>
  )
}

export default Header