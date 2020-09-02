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
        <img src={ReactSVG} />
      </div>
      <div className='stack__container'>
        <img src={VueSVG} />
      </div>
      <div className='stack__container'>
        <img src={JsSVG} />
      </div>
      <div className='stack__container'>
        <img src={SassSVG} />
      </div>
      <div className='stack__container'>
        <img src={WebpackSVG} />
      </div>
      <div className='stack__container'>
        <img src={GitSVG} />
      </div>
      <div className='stack__container'>
        <img src={NetlifySVG} />
      </div>
      <div className='stack__container'>
        <img src={FigmaSVG} />
      </div>
    </div>
  )
}

export default SkillSet