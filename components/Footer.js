import SkillSet from '../components/SkillSet'

function Footer() {  
  return (
    <div className="footer-container">
      <SkillSet/>
      <div className="footer">
        <p className="footer__content">
          Made from scratch with <span style={{paddingRight: '7px'}} aria-label="fire" role="img">🔥</span> using React Hooks, <a href="https://nextjs.org/" rel="noreferrer nooponer" target="_blank">NextJS</a> and <a href="https://www.contentful.com/" rel="noreferrer nooponer" target="_blank">Contentful</a></p>
      </div>
    </div>
  )
}

export default Footer