import React from 'react'
import style from 'styles/member.scss';

type Props = {
  name: string,
  description: string,
  role?: string
}

const Member = ({ name, description, role }: Props) => (
  <div className={style.member}>
    {role && <span>{role}</span>}
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
)

export default Member;
