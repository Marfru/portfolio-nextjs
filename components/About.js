import { useEffect, useState } from 'react'
import { fetchHomeContent } from '../contentful';

function About() {
  const [about, setAbout] = useState([])

  useEffect(() => {
    async function getAboutContent() {
      const aboutContent = await fetchHomeContent()
      setAbout([...aboutContent])
    }
    getAboutContent()
  }, [])
  
  return (
    <div className="about">
    {about.length > 0
        ? about.map(p => (
          <div className="about__content">
            <h3 style={{ marginBottom: '1.5rem'}}><span className="about__emoji" aria-label="hello" role="img">👋</span> {p.fields.subtitle}</h3>
            <h1>{p.fields.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: p.fields.description }} />
            </div>
          ))
        : null}
        <a href="mailto:hola@marfru.com"><button className="button">Let's chat</button></a>
    </div>
  )
}

export default About