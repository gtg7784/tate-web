import React from 'react';
import Link from 'next/link';
import style from 'styles/header.scss'

const Header = () => (
  <header className={style.header}>
    <img src="/static/whitelogo.svg" alt=""/>
    <ul>
      <li>
        <Link href="/#home">HOME</Link>
      </li>
      <li>
        <Link href="/#intro">ABOUT TATE</Link>
      </li>
      <li>
        <Link href="/#member">MEMBERS</Link>
      </li>
      <li>
        <Link href="/#artwork">ARTWORKS</Link>
      </li>
    </ul>
  </header>
);

export default Header;