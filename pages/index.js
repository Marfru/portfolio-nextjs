import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import About from '../components/About'
import Header from '../components/Header'
import { motion } from 'framer-motion';
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
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}>
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
      </motion.div>
    </>
  )
}

export default HomePage