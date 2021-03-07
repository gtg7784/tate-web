import {GetServerSideProps} from 'next'
import { useRouter } from 'next/router'
import Youtube, { Options } from 'react-youtube'
import axios from 'axios'
import Layout from 'components/Layout';
import Section from 'components/Section'
import styles from 'styles/detail.scss'
import { server } from 'config'
import { ArtworkType } from 'interfaces';

type Props = {
  data: ArtworkType
}

const ArtworkPage = ({ data }: Props) => {
  const router = useRouter();
  const {id} = router.query;

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
  <Layout>
    <Section>
      <div className={styles.container}>
        <div>
          {data.videoId ? <Youtube opts={opts} videoId={data.videoId} /> : <img src={`/artworks/${id}.png`} width={'auto'} height={'auto'} />}
        </div>
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </Section>
  </Layout>
)}

export default ArtworkPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {id} = ctx.query;
  const res = await axios.get(`${server}/api/artworks/${id}`)

  return { props: {
    data: res.data
  }}
}
