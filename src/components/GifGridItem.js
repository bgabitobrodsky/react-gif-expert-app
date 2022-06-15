import React from 'react'

export const GifGridItem = ({id,title,url}) => {
  return (
    <a href={url} className='card animate__animated animate__fadeIn' rel='noreferrer' target="_blank">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </a>
  )
}
