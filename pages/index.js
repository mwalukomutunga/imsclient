import Head from 'next/head'
import Content from '../components/content'

export default function Home() {
  return (
    <div >
      <Content Page="Dashboard">
      <main >
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>
      </Content>
    </div>
  )
}
