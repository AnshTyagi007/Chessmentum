import Header from '../Components/Header'
import Home from '../Components/Landing/Home'
import About from '../Components/Landing/About'
import Theme from '../Components/Landing/Theme'
import Community from '../Components/Landing/Community'
import Games from '../Components/Landing/Games'

const LandingPage = () => {
  return (
    <div className='w-full flex-1 flex flex-col items-center bg-black text-white relative'
      style={{ fontFamily: "Black Ops One" }}
    >
      <Header />
      <div className='h-24'></div>
      <div className='w-full h-full px-16 flex flex-col gap-12 items-center'>
        <Home />
        <Games />
        <Community />
        <About />
        <Theme />
      </div>
    </div>
  )
}

export default LandingPage