import SassSVG from '../images/sass.svg'
import FigmaSVG from '../images/figma.svg'
import GitSVG from '../images/git.svg'
import JsSVG from '../images/js.svg'
import NetlifySVG from '../images/netlify.svg'
import ReactSVG from '../images/react.svg'
import VueSVG from '../images/vue.svg'
import WebpackSVG from '../images/webpack.svg'

function SkillSet() {
  return (
    <div className='stack'>
      <div className='stack__container'>
        <img src={ReactSVG} alt='react logo' />
      </div>
      <div className='stack__container'>
        <img src={VueSVG} alt='vue logo' />
      </div>
      <div className='stack__container'>
        <img src={JsSVG} alt='javascript logo'/>
      </div>
      <div className='stack__container'>
        <img src={SassSVG} alt='sass logo' />
      </div>
      <div className='stack__container'>
        <img src={WebpackSVG} alt='webpack logo'/>
      </div>
      <div className='stack__container'>
        <img src={GitSVG} alt='git logo'/>
      </div>
      <div className='stack__container'>
        <img src={NetlifySVG} alt='netlify logo' />
      </div>
      <div className='stack__container'>
        <img src={FigmaSVG} alt='figma logo'/>
      </div>
    </div>
  )
}

export default SkillSet