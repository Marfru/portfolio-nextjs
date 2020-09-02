import Link from 'next/link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Post({ alt, subtitle, image, title, slug, id }) {
  return (
    <div className="skills">
      <Link as={`/skills/${slug}`} href='skills/[skills]' key={id}>
      <a>
        <img className="skills__image" alt={alt} src={image} />
        <div className="skills__text">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <span className="skills__span">Read More <NavigateNextIcon/></span>
        </div>
      </a>
      </Link>
    </div>
  )
}

export default Post