import type { NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {loading && <>Loading...</>}
          {session && (
            <>
              Signed in as {session.user.name} <br />
              <button
                onClick={() => {
                  signOut
                }}
              >
                Sign out
              </button>
            </>
          )}
          {!session && !loading && (
            <>
              Not signed in <br />
              <button
                onClick={() => {
                  signIn
                }}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </main>

      <footer>
        Powered by
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        ,{' '}
        <a
          href="https://next-auth.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextAuth.js
        </a>
        ,{' '}
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prisma
        </a>{' '}
        and{' '}
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MongoDB
        </a>
      </footer>
    </div>
  )
}

export default Home
