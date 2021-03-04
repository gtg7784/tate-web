import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header';
import style from '../styles/layout.scss';
import '../styles/main.global.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Tate' }: Props) => (
  <div className={style.body}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <Header/>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
