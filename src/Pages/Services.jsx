import {ServiceTypes} from '../helpers/Service'
import ServiceCard from '../componments/ServiceCard'

const Services = () => {
  return (
    <div className='services'>
        <div className='hero'>
        <h1 className='head'>Services</h1>
        <p>Explore the different sides of fitness While finding which type of training suits you. Push past your limits</p>
        </div>
        <div className='serviceItems'>
            {ServiceTypes.map((service, key) =>{
                return <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                key={key}
                />
            })}
        </div>
    </div>
  )
}

export default Services
