
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SinglePost from '../../components/singlePost'
import HomeLink from '../../components/HomeLink'
import { fetchPostContent } from '../../contentful'

function Skills() {
  const router = useRouter();
  const [singlePosts, setSinglePosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchPostContent()
      const singleItemPosts = allPosts.filter(function (post) {
        return post.fields.slug === router.query.skills
      }) 
      setSinglePosts([...singleItemPosts])
    }
    getPosts()
  }, [])

  return (
    <>
   <HomeLink/>
    {singlePosts.length > 0
      ? singlePosts.map(p => (
    <SinglePost
              key={p.sys.id}
              alt={p.fields.alt}
              image={p.fields.image}
              title={p.fields.title}
              description={p.fields.description}
              description2={p.fields.description2}
              image1={p.fields.image1.fields ? `https:${p.fields.image1.fields.file.url}` : null}
              image2={p.fields.image2.fields ? `https:${p.fields.image2.fields.file.url}` : null}
            />

        ))
      : null}
      </>
  )
}

export default Skills
