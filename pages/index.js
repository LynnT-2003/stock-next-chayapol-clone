import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Lynn Page</title>
    </Head>
    <h1>Lynn Page</h1>
    <p>
      This is a sample page for Lynn.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
