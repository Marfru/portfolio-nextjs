import Link from 'next/link';

function HomeLink() {
  return (
    <Link as='/' href='/'>
    <a>
      <button className="button">Go Back</button>
    </a>
    </Link>
  )
}

export default HomeLink