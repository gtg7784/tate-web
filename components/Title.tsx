import React, {CSSProperties} from 'react';
import styles from 'styles/title.scss'

type Props = {
  title: string,
  style?: CSSProperties
}
const Title = ({ title, style }: Props) => (
  <h1 className={styles.h1} style={style}>
    {title}
  </h1>
)

export default Title;