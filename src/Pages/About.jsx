import profpic from '../assets/prof.jpg'
import '../Styles.css/About.css';
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Linked from '@mui/icons-material/LinkedIn'
import '../Styles.css/About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='hm'><img src={profpic} height={350} width={350}/></div>
        <div className='intro'>
            <h1>Greg Mensah</h1>
            <h3>Personal Trainer</h3>
            <p className='p'>Im Greg Mensah, a personal trainer who discovered a passion for fitness during the pandemic. I honed my expertise by becoming certified through ISSA after completing their comprehensive training course. My mission is to assist others in achieving their fitness goals and embracing healthier lifestyles, highlighting the potential for growth and positive change even in difficult times.</p>
            <div className='icons2'>
                <a href='https://www.instagram.com/ryu.loki/?igshid=NTc4MTIwNjQ2YQ%3D%3D'><Instagram/></a>
                <a href='https://twitter.com/'><Twitter /></a>
                <a href='https://www.linkedin.com/in/gregmen/'><Linked /></a>
            </div>
        </div>
        <div className='past'>
            <h1>About Greg Mensah</h1>
            <p>From my early years, I embodied an active lifestyle, maintaining a constant engagement with physical activities. Throughout high school, I channeled my energy into soccer, dedicating myself to the sport with fervor. However, it was during my senior year that I stumbled upon a new passion: lifting weights. The empowering sensation of sculpting my body and witnessing my own progress became addictive.</p>
            <p>This newfound love endured through my college years, as I consistently embraced weightlifting as a cornerstone of my routine. Witnessing the transformative impact it had on my life, I felt an unwavering desire to share this enthusiasm with others. Motivated by this aspiration, I embarked on a journey to acquire professional certification, a decision fueled by the ambition to guide and inspire others in reaching their fitness aspirations.</p>
            <h3>My Past experiences</h3>
            <p>From my early years, I embodied an active lifestyle, maintaining a constant engagement with physical activities. Throughout high school, I channeled my energy into soccer, dedicating myself to the sport with fervor. However, it was during my senior year that I stumbled upon a new passion: lifting weights. The empowering sensation of sculpting my body and witnessing my own progress became addictive. This newfound love endured through my college years, as I consistently embraced weightlifting as a cornerstone of my routine. Witnessing the transformative impact it had on my life, I felt an unwavering desire to share this enthusiasm with others. Motivated by this aspiration, I embarked on a journey to acquire professional certification, a decision fueled by the ambition to guide and inspire others in reaching their fitness aspirations.</p>
            <ul className='core'>
                <li> I played soccer all four years of highschool.</li>
                <li>I have Three years of Strength training. Performing compound lifts effectively </li>
                <li>During the pandemic I dedicated  myself to getting the ISSA Certification</li>
            </ul>
        </div>
    </div>
  )
}

export default About
