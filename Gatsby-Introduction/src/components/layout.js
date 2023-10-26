// src/components/Layout.js
import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/page-1/">Página 1</Link></li>
          <li><Link to="/page-2/">Página 2</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
)

export default Layout
