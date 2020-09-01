import '../styles/reset.css'
import '../styles/bootstrap.min.css'
import '../styles/bootstrap-grid.min.css'
import '../styles/main.scss'
import { motion } from 'framer-motion'
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer'

function MyApp({ Component, pageProps, router }) {
  return (
    <Container>
    <Header/>
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
    <Footer />
    </motion.div>
    </Container>
  )}

export default MyApp
