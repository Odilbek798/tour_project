import React from 'react'
import { Link } from 'react-router-dom'

const TextCard = ({ title, text, tags, route }) => {
  return (
    <div>
      <div className="text_card">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={route}>
          <button >{tags}</button></Link>
      </div>
    </div>
  )
}

export default TextCard