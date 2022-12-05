import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/residentCard.css'


const ResidentCard = ({ url }) => {
 const [resident, setResident] = useState();

useEffect (() => {
  axios.get (url)
  .then(res => setResident (res.data))
  .catch(err => console.log(err))
}, []);


  return (
    <article className="card">
      <header className="card__header">
        <img className="card__avatar" src={resident?.image} alt="" />
        <div className="card__circle-container">
          <div className={`card__circle ${resident?.status}`}></div> 
          <span className="card__circle-label">{}</span>
        </div>
        </header>
        <section className="card__body">
          <h3 className="card__name">{resident?.name}</h3>
          <ul className="card__list">
            <li className="card__item">
              <span className="card__item-label"> Species</span>
              <b><span className="card__item-value">{resident?.species}</span></b>
            </li>
              <li className="card__item">
                <span className="card__item-label"> Origin</span>
                <b><span className="card__item-value">{resident?.origin.name}</span></b>
            </li>
            <li className="card__item">
              <span className="card__item-label"> Episodes where appear</span>
              <b><span className="card__item-value">{resident?.episode.length}</span></b>
            </li>
            </ul>
            </section>
            </article>
  )
}
  

export default ResidentCard;