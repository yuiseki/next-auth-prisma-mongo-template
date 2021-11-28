import type { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '~/components/Footer'
import { SignInStatus } from '~/components/SignInStatus'
import { UserIconList } from '~/components/UserIconList'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Demo of next-auth-prisma-mongo-template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignInStatus />
        <div>
          <UserIconList />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
