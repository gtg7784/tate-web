import React, {useEffect, useState} from 'react';
import Layout from 'components/Layout'
import Section from 'components/Section'
import Title from 'components/Title'
import Member from 'components/Member'
import style from 'styles/index.scss'
import axios from 'axios';
import Artwork from 'components/Artwork';
import { ArtworkType } from 'interfaces';

const IndexPage = () => {
  const [artwork, setArtwork] = useState<ArtworkType[]>([]);

  useEffect(() => {
    axios.get('/api/artworks').then(res => setArtwork(res.data));
    
    console.log(artwork)
  }, [])

  return (
  <Layout>
    <Section background="#1f2e64" id="home">
      <div className={style.container}>
        <h1>
          Hello<br/>
          We are<br/>
          TATE
        </h1>
      </div>
    </Section>
    <Section id="intro">
      <div>
        <Title title="INTRODUCE" style={{ marginBottom: 150 }} />
        <div className={style.intro}>
          <img src="/static/bluelogo.svg" alt=""/>
          <p>
            TATE는 ‘ Terific Artist Talent Editor ’의 약자로<br/>
            다양한 분야의 디자인을 다루는 디자이너들이 모여<br/>
            자신의 개성과 창의성을 마음껏 발휘할 수 있는<br/>
            콘텐츠디자인과 디자인 전문 동아리입니다.<br/>
            <br/>
            TATE에서는 일러스트, 포토샵, 3D MAX 등을 통해<br/>
            여러 분야의 디자인을 배우고 익히며 자신의 능력과 창의력을<br/>
            한층 더 발전시킬 수 있습니다.<br/>
            <br/>
            또한 소프트웨어 나눔축제, 선린축제 굿즈 부스와 같은 행사에<br/>
            참여하여 다양한 경험을 할 수 있습니다.
          </p>
        </div>
      </div>
    </Section>
    <Section id="award">
      <div>
        <Title title="AWARDS" />
        <div className={style.award}>
          <p>
            그래픽 공모전 포스터 부문 은상 김*현<br/>
            그래픽 공모전 모션 그래픽 부문 동상 정*비<br/>
            선린 해커톤 생활 부문 동상 김*현<br/>
            축제 포스터 공모전 동상 김*현<br/>
            영상 공모전 영화 부문 대상 김*현<br/>
            영상 공모전 광고 부문 동상 김*현<br/>
            청소년디자인전람회 특선 정*비<br/>
            교내 축제 디자인 김*현<br/>
            학생회 선거 포스터 디자인 김*현<br/>
            학교 축제 홍보영상 제작 김*현
          </p>
          <p>
            선린 해커톤 생활 부문 금상 김*현<br/>
            디지털 콘텐츠 개발 대회 금상 김*현<br/>
            그래픽 공모전 일러스트 부문 동상 정*비<br/>
            디지털 콘텐츠 개발 대회 은상 박*별<br/>
            영상 공모전 광고 부문 금상 박*윤
          </p>
        </div>
      </div>
    </Section>
    <Section id="member">
      <div className={style.member}>
        <Title title="11th MEMBERS" />
        <div>
          <Member name="김유라" description="그래픽디자인 | 포토샵" role="부장"/>
          <Member name="김민주" description="모델링 | C4D" role="부부장"/>
        </div>
        <div>
          <Member name="강유라" description="그래픽디자인 | 포토샵"/>
          <Member name="권영준" description="그래픽디자인 | 포토샵"/>
          <Member name="박주윤" description="캐릭터디자인 | 클립스튜디오"/>
          <Member name="박현서" description="아트워크 | 포토샵"/>
        </div>
        <div>
          <Member name="신상호" description="그래픽디자인 | 일러스트"/>
          <Member name="송상은" description="아트워크 | 포토샵"/>
          <Member name="이해나" description="그래픽디자인 | 포토샵"/>
        </div>
      </div>
    </Section>
    <Section id="artwork">
      <div className={style.artwork}>
        <Title title="ARTWORKS" />
        <div>
          {artwork.map((item, index) => <Artwork {...item} key={index} />)}
        </div>
      </div>
    </Section>
  </Layout>
)}

export default IndexPage
