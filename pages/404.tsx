import Link from 'next/link'
import styles from 'styles/error.module.scss'
import Footer from 'components/footer'

export default function FourOhFour(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <h1>404</h1>
        <Link href="/">
          <a>Return to home</a>
        </Link>
      </div>
      <Footer />
    </>
  )
}
