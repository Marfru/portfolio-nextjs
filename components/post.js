import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Col, Image } from 'react-bootstrap'

function Post({ alt, subtitle, image, title, slug, id }) {
  return (
    <Col lg={4} sm={12}>
    <div className="skills">
      <Link as={`/skills/${slug}`} href='skills/[skills]' key={id}>
      <a>
        <Image className="skills__image" alt={alt} src={image} fluid/>
        <div className="skills__text">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <span className="skills__span">Read More <NavigateNextIcon/></span>
        </div>
      </a>
      </Link>
    </div>
    </Col>
  )
}

export default Post