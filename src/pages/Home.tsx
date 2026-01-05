import videoBg from '../video/bg1.mp4'
import './pages.css'

const Home = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
            <h1 style={{fontSize:"40px" , fontWeight:'bold'}}>Welcome</h1>
            <p style={{fontSize:"20px" , fontWeight:'bold'}}>To my site.</p>
        </div>
    </div>
  )
}

export default Home