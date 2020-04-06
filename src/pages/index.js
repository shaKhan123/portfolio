import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import headerStyles from "./index.module.scss"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

const IndexPage = () => (

    <div className={headerStyles.container}>
      <div>
        <h1>Hi I'm Shagufta</h1>
        <p>I live inside a pineapple.
        <ul>
          <li>Java</li>
          <li>Spring</li>
          <li>React</li>
        </ul>
        Is all I do. 
        </p>
        <p>
          
          To contact me just... <Link to="/contact">Contact me</Link>
        </p>
      </div>
      <div>
        <img src={require("../images/star.jpg")} />
      </div>
    </div>

)

export default IndexPage
