import Projects from '../../components/Projects';

function ProjectsPage() {

  return (
    <>
    <Projects />
      </>
  )
}

ProjectsPage.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default ProjectsPage