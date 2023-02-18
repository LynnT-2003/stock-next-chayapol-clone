import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Lynn Thit Page</title>
    </Head>
    <h1>Yes, it's still me Lynn Thit</h1>
    <p>
      Remember my name.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
