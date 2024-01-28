import backgroundImg from '../../assets/Background.jpg';

function Hero() {

  return (
    <div className="bg-cover h-screen bg-center md:h-screen lg:pl-[200px] lg:h-screen flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className='text-center lg:text-left'>
        <h1 className='font-semibold text-white text-xl lg:text-7xl md:text-5xl justify-center'>Hi,</h1>
        <h2 className='font-bold text-white text-2xl lg:text-9xl md:text-7xl'>I'm Jaseemuddin Naseem</h2>
        <h3 className='text-white font-medium text-lg lg:text-4xl md:text-3xl'>& I am a Web Developer!</h3>
      </div>
    </div>
  )
}

export default Hero