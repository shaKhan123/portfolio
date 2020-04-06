import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const Layout = ({ location, children })  => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      <TransitionProvider location={location}>
      <TransitionViews>
        {children}
      </TransitionViews>
    </TransitionProvider>
    </div>
    <Footer />

  </div>
)

export default Layout
