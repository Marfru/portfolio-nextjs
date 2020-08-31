import { Col } from 'react-bootstrap';
import Link from 'next/link';

function Post({ alt, subtitle, image, title, slug, id }) {
  return (
    <Col className="skills" lg={4} md={6} xs={12}>
      <Link as={'/skills/' + slug} href='skills/[skills]' key={id}>
      <a>
        <img style={{width: '300px'}} alt={alt} src={image} />
        <div className="skills__text">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <span className="skills__span">Read More...</span>
        </div>
      </a>
      </Link>
    </Col>
  )
}

export default Post