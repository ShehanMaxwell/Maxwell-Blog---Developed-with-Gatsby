import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo" 
import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the third page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ThirdPage
