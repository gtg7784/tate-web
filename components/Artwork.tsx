import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from 'styles/artwork.scss'
import { ArtworkType } from 'interfaces'

const Artwork = ({ name, thumbtext, index }: ArtworkType) => (
  <Link href={`/artworks/${index}`}>
    <div className={style.artwork}>
      <Image width={304} height={304} src={`/thumbnails/${index}.png`} alt={name}/>
      <h4>{name}</h4>
      <p>{thumbtext}</p>
    </div>
  </Link>
)

export default Artwork;