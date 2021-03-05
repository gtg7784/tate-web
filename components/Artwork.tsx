import React from 'react'
import style from 'styles/artwork.scss'
import { ArtworkType } from 'interfaces';

const Artwork = ({ img, name, description }: ArtworkType) => (
  <div className={style.artwork}>
    <img src={img} alt={name}/>
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
)

export default Artwork;