import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Resume from '../components/resume';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Resume />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage;
