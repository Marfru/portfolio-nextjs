import Link from 'next/link';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Breadcrumbs() {
  return (
    <>
    <Link as='/' href='/'>
    <a className="breadcrumbs">
      <NavigateBeforeIcon color="#fff"/><span>Back</span>
    </a>
    </Link>
    </>
  )
}

export default Breadcrumbs