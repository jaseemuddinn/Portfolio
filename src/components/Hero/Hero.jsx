import backgroundImg from '../../assets/Background.jpg';

function Hero() {

  return (
    <div className="bg-cover h-screen bg-center md:h-auto lg:h-screen" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='pt-[250px] lg:pt-[280px] lg:ml-[280px] flex flex-col text-center lg:text-left'>
      <h1 className='font-semibold text-white text-xl lg:text-7xl md:text-4xl'>Hi,</h1>
      <h2 className='font-bold text-white text-2xl lg:text-7xl md:text-4xl'>I'm Jaseemuddin Naseem</h2>
      <h3 className='text-white font-medium text-lg lg:text-2xl'>& I am a Web Developer!</h3>
      </div>
   </div>
  )
}

export default Hero