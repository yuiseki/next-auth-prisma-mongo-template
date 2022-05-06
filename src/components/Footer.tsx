export const Footer = () => {
  return (
    <footer style={{ position: 'absolute', bottom: 10, left: 10 }}>
      Powered by{' '}
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
      . <br />
      <a
        href="https://github.com/yuiseki/next-auth-prisma-mongo-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        Use this template on GitHub!
      </a>
    </footer>
  )
}
