/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <svg
        style={{
          width: `100vw`,
          // height: `100px`,
        }}
        className="svg-header"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
        preserveAspectRatio="none">
        <polygon fill="#D1E1EA" points="0,50 100,50 100,0" />
      </svg>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()} Rise Erpelding, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>

      </div>
      <svg
          style={{
            margin: `0 auto`,
            padding: `0`,
          }}
          className="svg-main"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            fill="#075D8F"
            points="0,0 0,100 100,100"
          />
        </svg>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
