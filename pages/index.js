import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout,{ siteTitle } from '../components/Layout'
import utilStyle from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'

// SSG
export async function getStaticProps (){
    const allPostData = getPostsData()
    console.log(allPostData);

    return {
      props: {
        allPostData,
      },
    };
}

export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
        「ラフ×ラフ オフィシャルサイト」は、ラフ×ラフの公式サイト兼ファンクラブサイトとなります。
ニュースや活動スケジュール、楽曲やミュージックビデオのリリース、公式YouTubeチャンネルに関してなど、
ラフ×ラフの最新情報をいち早くお届けします。
        </p>
      </section>
    <section>
      <h2>📝ブログタイトル</h2>
      <div className={styles.grid}>
        {allPostData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`} legacyBehavior>
            <img src={thumbnail}
              className={styles.thumbnailImage}
            />
            </Link>
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className={utilStyle.boldText}>
              {title}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              {date}
            </small>
          </article>
        )

        )}
      </div>
    </section>
    </Layout>
  )
}
