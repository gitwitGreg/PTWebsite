import '../Styles.css/Services.css'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ServiceCard(props){
  return (
    <div className='scontainer'>
        <div style={{backgroundImage: `url(${props.image})`}}></div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link>
          <button className='startbtn'>More Info <ArrowForwardIosIcon className='arrow'/></button>
        </Link>
    </div>
  );
};






export default ServiceCard
