import {Col, Row} from 'react-bootstrap';

function SinglePost({ alt, title, description, description2, image1, image2 }) {
  return (
      <div className="single-view">
        <h1>{title}</h1>
        <Row className="single-view__content">
          <Col sm={12} lg={5}>
            <p>{description}</p>
          </Col>
          <Col className="single-view__image" sm={12} lg={6}>
            <img src={image1} alt={alt} />
          </Col>
        </Row>
        <Row className="single-view__content">
          <Col className="single-view__image" sm={12} lg={6}>
            <img src={image2} alt={alt} />
          </Col>
          <Col sm={12} lg={5}>
            <p>{description2}</p>
          </Col>
        </Row>
      </div>
  )
}

export default SinglePost