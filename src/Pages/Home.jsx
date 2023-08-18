import { Link } from 'react-router-dom'
import PtBanner from '../assets/workout.jpg'
import '../Styles.css/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='header' style={{backgroundImage: `url(${PtBanner})`}}>
        <div className='headerinfo'>
          <h1>Elite PT</h1>
          <p>The time has come to make change</p>
          <Link to='/Services'>
           <button className='startbtn'>Start Today</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
