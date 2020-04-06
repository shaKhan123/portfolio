import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)   

  return (
  
      <ol className={blogStyles.posts} >
        {posts.allMarkdownRemark.edges.map(post => (
          <li className={blogStyles.post} key={post.node.frontmatter.title}>
            <Link to={`/blog/${post.node.fields.slug}`}>
            <h2> {post.node.frontmatter.title} </h2>
            <p> {post.node.frontmatter.date} </p>
            </Link>
          </li>
        ))}
      </ol>
   
  )
}

export default BlogPage
