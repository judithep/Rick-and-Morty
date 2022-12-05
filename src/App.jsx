import axios from 'axios';
import './App.css'
import { useState, useEffect } from 'react'
import ResidentCard from './components/ResidentCard'
import LocationInfo from './components/LocationInfo'
import ErrorFetch from './components/ErrorFetch'



function App() {

  const [location, setLocation] = useState()
  const [locationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)
 

  
  useEffect(() => {
    let URL

    if(locationInput){
      URL = `https://rickandmortyapi.com/api/location/${locationInput}`
    } else {
    const randomIdLocation = Math.floor(Math.random() * 126) + 1
    URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
    }

    axios.get(URL)
    .then(res => {
    setLocation(res.data)
    setHasError(false)
  })
    .catch(err => {
      setHasError(true)
      console.log(err)
    })
  }, [locationInput])


  const handleSubmit = e => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
  }

  
    return (
    
       <div className="App">
      <h1 className='card__one'></h1>
      <form className='card__search' onSubmit={handleSubmit}>
        <input className='card__input' id='inputSearch' type="text" />
        <button className='card__button'>Search</button>
      </form>
      {
        hasError ?
        <ErrorFetch />
      :
        <>
       
      <LocationInfo location={location}/>
      <div className='residents-container'>
        {
          location?.residents.map(url => (
            <ResidentCard key={url} url={url} />
          ))
        }

      </div>
      </>
    }
    </div>
    )
  }
      
      export default App;
