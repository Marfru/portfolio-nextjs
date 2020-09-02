import { useEffect, useState } from 'react'
import TitlePage from '../../components/TitlePage';
import Breadcrumbs from '../../components/Breadcrumbs'
import { fetchProjectsContent } from '../../contentful'
import { Row, Image, Col } from 'react-bootstrap'
import LaunchIcon from '@material-ui/icons/Launch';

function ProjectsPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProjects() {
      const allProjects = await fetchProjectsContent()
      setProjects([...allProjects])
    }
    getProjects()
  }, [])
  return (
    <>
    <Breadcrumbs/>
    <div style={{ marginRight: '2rem', marginLeft: '2rem'}}>
      <TitlePage title='Projects' />
    </div>
    <Row>
    {projects.length > 0
        ? projects.map(p => (
          <Col lg={4} sm={12}>
        <div className="skills">
          <a href={p.fields.url} target="_blank" rel="noopener noreferrer">
            <div style={{ padding: '10px 30px'}}>
            <Image className="skills__image" src={`https:${p.fields.image.fields.file.url}`} fluid/>
            </div>
            <div className="skills__text">
              <h3>{p.fields.title}</h3>
              <p>{p.fields.description}</p>
              <span className="skills__span">Visit <LaunchIcon fontSize="small"/></span>
            </div>
            </a>
        </div>
        </Col>
          ))
        : null}
        </Row>
        </>
  )
}

ProjectsPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default ProjectsPage