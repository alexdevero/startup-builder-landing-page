import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="#faq">FAQs</a>
        </li>

        <li>
          <a href="#howItWorks">How it works</a>
        </li>

        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>

        <li>
          <a href="">Sign up</a>
        </li>

        {/* <li>
          <a href="">Sign in</a>
        </li> */}

        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
          }

          nav {
          }

          ul {
            display: flex;
            justify-content: space-between;
          }

          li {
            display: flex;
            padding: 6px 8px;
            text-align: center;
          }

          a {
            text-decoration: none;
            color: #067df7;
            font-size: 15px;
          }
        `}
      </style>
    </nav>
  </header>
)

export default Nav
