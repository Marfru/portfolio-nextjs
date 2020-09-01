import AboutContent from '../../components/AboutContent';

function AboutPage() {

  return (
    <>
    <AboutContent />
      </>
  )
}

AboutPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default AboutPage