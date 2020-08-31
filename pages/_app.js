import '../styles/reset.css'
import '../styles/bootstrap.min.css'
import '../styles/bootstrap-grid.min.css'
import '../styles/main.scss'
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
  <AnimatePresence>
  <motion.div key={router.route} initial="pageInitial" exit="pageExit" animate="pageAnimate" variants={{
    pageInitial: {
      scale: .8,
      opacity: 0
    },
    pageAnimate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .4
      }
    },
    pageExit: {
      backgroundColor: 'white',
      filter: `invert()`,
      opacity: 0,
    }
  }}>
    <Component {...pageProps} />
  </motion.div>
  </AnimatePresence>
  )}

export default MyApp
