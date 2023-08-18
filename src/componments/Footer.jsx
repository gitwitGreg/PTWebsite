import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Linked from '@mui/icons-material/LinkedIn'
import Facebook from '@mui/icons-material/Facebook'
import '../Styles.css/Footer.css';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='socials'>
            <a href='https://www.instagram.com/ryu.loki/?igshid=NTc4MTIwNjQ2YQ%3D%3D'><Instagram/> </a>
            <a href='https://twitter.com/'><Twitter /></a>
            <a href='https://www.linkedin.com/in/gregmen/'><Linked /></a>
            <a href='https://www.facebook.com/'><Facebook /></a>
        </div>
        <p> &copy; 2023 Elite Pt</p>
    </div>
  )
}

export default Footer
