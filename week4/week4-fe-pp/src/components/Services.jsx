import Title from './Title'
import Service from './Service'
import { useState } from 'react';
import { services } from "../data";

function Services() {

  const handleDeleteService = (serviceId)=> {
    setServicesData( () =>{
      return servicesData.filter( (service) => service.id !== serviceId)
    })
  }
  const [servicesData, setServicesData] = useState(services);
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onDelete={handleDeleteService} />
        })}
      </div>
    </section>
  )
}
export default Services