import React, {ReactNode} from 'react';
import style from 'styles/section.scss';

type Props = {
  children?: ReactNode;
  background?: string;
  id: string;
}

const Section = ({ children, background = '#ffffff', id}: Props) => (
  <section className={style.section} style={{backgroundColor: background}} id={id}>
    {children}
  </section>
)

export default Section;
