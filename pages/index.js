import { useEffect, useState } from 'react'
import Post from '../components/post'
import About from '../components/About'
import { Row } from 'react-bootstrap';
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
    </>
  )
}

export default HomePage