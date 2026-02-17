import React from 'react'
import { Link } from 'react-router-dom'

const TextCard = ({ title, text, tags, route, image }) => {
  return (
    <div>
      <div className="card"
      style={{
        backgroundImage: "url('/view.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        <div className="cardT">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={route}>
          <button >{tags}</button></Link>
          </div>
      </div>
    </div>
  )
}

export default TextCard