import React from 'react';
import style from 'styles/footer.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div>
      <div className={style.logoWrap}>
        <img src="/static/bluelogo.svg" alt=""/>
        <img src="/static/sunrinlogo.svg" alt=""/>
      </div>
      <p>
        © 2021 TATE All Rights Reserved<br/>
        Designed by Yura Kim<br/>
        Developed by TaeGeon Go
      </p>
    </div>
    <div>
      <h5>선린인터넷고등학교 콘텐츠디자인과</h5>
      <p>
        서울특별시 용산구 원효로97길 33-4<br/>
        선린인터넷고등학교 3호관 2층 디자인실습실<br/>
        Tel. 713-6213  |  Fax. 704-0960
      </p>
    </div>
    <div>
      <h5>시연회 제작</h5>
      <p>
        김유라 김민주 강유라<br/>
        권영준 박주윤 박현서<br/>
        신상호 송상은 이해나  
      </p>
    </div>
    <div className={style.snsWrap}>
      <a href="https://www.facebook.com/TATEDesignResearchClub/"><img src="" alt=""/></a>
      <a href="https://sunrint.hs.kr/"><img src="" alt=""/></a>
      <a href=""><img src="" alt=""/></a>
    </div>
  </footer>
)

export default Footer;