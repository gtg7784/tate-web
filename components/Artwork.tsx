import React from 'react'
import style from 'styles/artwork.scss'

type Props = {
  img: string,
  title: string,
  description: string
}

const Artwork = ({ img, title, description }: Props) => (
  <div className={style.artwork}>
    <img src={img} alt=""/>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
)

export default Artwork;