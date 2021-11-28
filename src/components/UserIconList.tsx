import { User } from '.prisma/client'
import useSWR from 'swr'
import fetcher from '~/lib/fetcher'

export const UserIconList = () => {
  const { data, error } = useSWR<Array<User>>('/api/users', fetcher)

  if (!data) return <div>Loading...</div>
  if (error) return <div>Failed to load</div>

  return (
    <div style={{ margin: '5px 0' }}>
      {data.map((user) => {
        return <img key={user.id} src={user.image} height={'40px'} />
      })}
    </div>
  )
}
