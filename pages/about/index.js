import AboutContent from '../../components/AboutContent'
import { useEffect, useState } from 'react'
import TitlePage from '../../components/TitlePage'
import Breadcrumbs from '../../components/Breadcrumbs'
import SkillSet from '../../components/SkillSet';
import { fetchAboutContent } from '../../contentful'
import { Row, Col, Image } from 'react-bootstrap'

function AboutPage() {
  const [about, setAbout] = useState([])

  useEffect(() => {
    async function getAbout() {
      const aboutContent = await fetchAboutContent()
      setAbout([...aboutContent])
    }
    getAbout()
  }, [])

  return (
    <>
    <Breadcrumbs/>
    {about.length > 0
        ? about.map(p => (
          <div className="single-view">
            <Row className="single-view__content">
            <Col sm={12} lg={6}>
          <TitlePage title={p.fields.title} />
          <div className="single-view__text" dangerouslySetInnerHTML={{ __html: p.fields.description }} />
          </Col>
          <Col className="single-view__image" sm={12} lg={6}>
          <Image src={`https:${p.fields.image.fields.file.url}`} alt="company logo" fluid/>
          </Col>
            </Row>
          </div>
          ))
        : null}
        <SkillSet/>
    </>
  )
}

AboutPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default AboutPage