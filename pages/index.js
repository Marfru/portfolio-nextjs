import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import About from '../components/About'
import Header from '../components/Header'
// import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Container, Row } from 'react-bootstrap';
import { fetchPostContent } from '../contentful';

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchPostContent()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Marcos Frutos | Front End Development, UX and UI</title>
      </Head>
      {/* <Sidebar /> */}
      <Container>
      <Header/>
      <About />
      <Row className="vision">
      {posts.length > 0
        ? posts.map(p => (
            <Post
              slug={p.fields.slug}
              id={p.sys.id}
              key={p.sys.id}
              alt={p.fields.alt}
              subtitle={p.fields.subtitle}
              image={p.fields.image}
              title={p.fields.title}
            />
          ))
        : null}
        </Row>
        <Footer />
      </Container>
    </>
  )
}

export default HomePage