import React from 'react';
import Link from 'next/link';
import style from '../styles/header.scss'

const Header = () => (
  <header className={style.header}>
    <img src="/static/logo.png" alt=""/>
    <ul>
      <li>
        <Link href="">HOME</Link>
      </li>
      <li>
        <Link href="">ABOUT TATE</Link>
      </li>
      <li>
        <Link href="">MEMBERS</Link>
      </li>
      <li>
        <Link href="">ARTWORKS</Link>
      </li>
    </ul>
  </header>
);

export default Header;