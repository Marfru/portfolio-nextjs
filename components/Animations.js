import { motion } from 'framer-motion';

export function MenuAnimation(props) {
  return (
    <motion.div className="menu" initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        scale: .6,
        width: '0'
      },
      pageAnimate: {
        width: '100%',
        scale: 1,
        transition: {
          duration: .3
        }
      }
    }}>
      {props.children}
    </motion.div>
  )
}
