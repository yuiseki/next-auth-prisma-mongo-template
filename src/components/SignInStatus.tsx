import { signIn, signOut, useSession } from 'next-auth/react'

export const SignInStatus = () => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <div>
      {loading && <>Loading...</>}
      {session && (
        <>
          Signed in as <img src={session.user.image} height={'20px'} />{' '}
          {session.user.name}.{' '}
          <button
            onClick={() => {
              signOut()
            }}
          >
            Sign out
          </button>
        </>
      )}
      {!session && !loading && (
        <>
          Not signed in.{' '}
          <button
            onClick={() => {
              signIn()
            }}
          >
            Sign in with Twitter (Read only)
          </button>
        </>
      )}
    </div>
  )
}
