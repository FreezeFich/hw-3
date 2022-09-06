import React from 'react'

function block(source,text,title) {
  return (
    <div className="block-two-block">
      <div className="block-two-block-title">
          <img src={source} alt="" height="48px" />
          <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default block