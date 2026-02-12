import React from 'react'

const TextCard = ({title, text}) => {
  return (
    <div>
        <div className="text_card">
            <h1>{title}</h1>
            <p>{text}</p>
            <button >Batafsil ma’lumot</button>
        </div>
    </div>
  )
}

export default TextCard