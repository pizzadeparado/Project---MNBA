import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <header>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main>
        <h1 className="title">Welcome!</h1>

        <div className="grid">
          <a href="posts" className="card">
            <h3>Posts &rarr;</h3>
          </a>

          <a href="users" className="card">
            <h3>Users &rarr;</h3>
          </a>

          <a href="analytics" className="card">
            <h3>Analytics &rarr;</h3>
          </a>

          <a href="deploy" className="card">
            <h3>Deploy &rarr;</h3>
          </a>

          <a href="../index" className="card">
            <h3>Logout &rarr;</h3>
          </a>
        </div>
      </main>

      <footer>Powered by Globant</footer>
    </div>
  )
}