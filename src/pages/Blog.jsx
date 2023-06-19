import React from 'react'
import { Container } from "react-bootstrap";
import MyBlog from "../components/Blog/MyBlog";


const Blog = () => {
  return (  
    <Container style={{padding: '60px'}}>
      <MyBlog />
    </Container>
  )
}

export default Blog