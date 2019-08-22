import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li>UPPERCASE</li>
      <li>lowercase</li>
      <li>camelCase</li>
      <li>snake_case</li>
      <li>kebab-case</li>
      <li>PascalCase</li>
      <li>Title Case</li>
      <li>CONSTANT_CASE</li>
      <li>https://www.npmjs.com/package/change-case</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
