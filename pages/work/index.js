import { useEffect, useState } from 'react'
import TitlePage from '../../components/TitlePage'
import Breadcrumbs from '../../components/Breadcrumbs'
import { fetchWorkContent } from '../../contentful'
import { Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import LaunchIcon from '@material-ui/icons/Launch';

function WorkPage() {
  const [work, setWork] = useState([])

  useEffect(() => {
    async function getWork() {
      const allWork = await fetchWorkContent()
      setWork([...allWork])
    }
    getWork()
  }, [])
  return (
    <>
    <Breadcrumbs/>
    <div style={{ marginRight: '2rem', marginLeft: '2rem'}}>
      <TitlePage title='Work' />
    </div>
    <Row>
    {work.length > 0
        ? work.map(p => (
          <Col lg={4} sm={12}>
          <div className="skills">
          <a href={p.fields.url} target="_blank" rel="noopener noreferrer">
            <Image className="skills__image" src={`https:${p.fields.image.fields.file.url}`} alt={p.fields.company} fluid/>
            <div className="skills__text">
              <h3>{p.fields.company}</h3>
              <h4>{p.fields.date}</h4>
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

WorkPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default WorkPage