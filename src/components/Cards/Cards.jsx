import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
    </div>
  )
}

export default Cards;