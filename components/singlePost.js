import {Col, Row} from 'react-bootstrap'
import TitlePage from '../components/TitlePage'
import {Image} from 'react-bootstrap'

function SinglePost({ alt, title, description, description2, image1, image2 }) {
  return (
      <div className="single-view">
        <Row className="single-view__content">
          <Col sm={12} lg={6}>
          <TitlePage title={title} />
          <p>{description}</p>
          </Col>
          <Col className="single-view__image" sm={12} lg={6}>
            <Image src={image1} alt={alt} fluid/>
          </Col>
        </Row>
        <Row className="single-view__content">
          <Col className="single-view__image" sm={12} lg={6}>
          <Image src={image2} alt={alt} fluid />
          </Col>
          <Col sm={12} lg={5}>
          <p>{description2}</p>
          </Col>
        </Row>
      </div>
  )
}

export default SinglePost