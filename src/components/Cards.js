import React from 'react'
import CardItem from './CardItem';
import './Cards.css'
import Data from '../Data/Data'

function Cards() {
  const dataComp = Data.map((data) =>{
    return(
      <CardItem
      src= {data.src}
      text = {data.title}
      label = {data.label}
      path={data.path}
      alt = {data.alt}
    />
    )
  })
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                  {dataComp}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards