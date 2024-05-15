import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "./components/Layout"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <p>Hello</p>
      </section>
    </Layout>
  )
}

export default IndexPage