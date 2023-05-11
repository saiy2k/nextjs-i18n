import Head from 'next/head'

export default function Home(props) {
  return <>
    <Head>
      <title> Test title </title>
      <meta name='description' content='Page description for SEO' />
    </Head>
    <div style={{ padding: 30 }}>
      <h1>Hello there!</h1>
    </div>
  </>
}
