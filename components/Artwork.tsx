import React from 'react'
import Link from 'next/link'
import style from 'styles/artwork.scss'
import { ArtworkType } from 'interfaces'

const Artwork = ({ img, name, description, link }: ArtworkType) => (
  <Link href={link}>
    <div className={style.artwork}>
      <img src={img} alt={name}/>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  </Link>
)

export default Artwork;