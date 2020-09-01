import Work from '../../components/Work';

function WorkPage() {

  return (
    <>
    <Work />
      </>
  )
}

WorkPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default WorkPage