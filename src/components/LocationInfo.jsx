import React from 'react'
import './styles/residentCard.css'

const LocationInfo = ({location}) => {
  return (
    
    <article className='card__article'>
       <h2 className='card__na-me'>{location?.name}</h2>
        <ul className='card__info'>
           
            <button className='card__type'><span> Type: </span>{location?.type}</button>
            
            <button className='card__dimension'><span> Dimension: </span>
            {location?.dimension}</button>

           <button className='card__population'><span> Population: </span>
            {location?.residents.length}</button>
        </ul>
    </article>
  )
}

export default LocationInfo