import React from 'react';
import './posts';
import './users';

export default function Dashboard() {
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

          <a href="../index" className="card">
            <h3>Logout &rarr;</h3>
          </a>
        </div>
      </main>

      <footer>Powered by Globant</footer>
    </div>
  )
}