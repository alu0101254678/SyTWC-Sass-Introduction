import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <h1>Página de Inicio</h1>
    <p>Esta es la página de inicio.</p>
    <ul>
      <li><Link to="/page-1/">Página 1</Link></li>
      <li><Link to="/page-2/">Página 2</Link></li>
    </ul>
    <StaticImage
      src="../images/example.png"
      alt="Texto alternativo de la imagen"
    />
  </Layout>
)

export default IndexPage
