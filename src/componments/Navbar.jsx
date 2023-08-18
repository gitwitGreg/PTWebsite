import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';




const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const togleNav = () => {
    setOpenLinks(!openLinks)
    return;
}


  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={logo} width={90} height={80}/>
        <div className='hiddenLinks' id={openLinks? 'open': 'close'}>
          <Link className='link' to='/Home'>Home</Link>
          <Link className='link' to='/About'>About me</Link>
          <Link className='link' to='/Services'>Services</Link>
          <Link className='link' to='/Contact'>Contact</Link>
        </div>
      </div>
      <div className='rightside'>
        <Link className='link' to='/Home'>Home</Link>
        <Link className='link' to='/About'>About me</Link>
        <Link className='link' to='/Services'>Services</Link>
        <Link className='link' to='/Contact'>Contact</Link>
        <button className='reorder' onClick={togleNav}>
        <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
