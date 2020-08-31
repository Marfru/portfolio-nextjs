import Link from 'next/link';

function HomeLink() {
  return (
    <button className="button">
    <Link as='/' href='/'><a>Go Back</a></Link>
    </button>
  )
}

export default HomeLink