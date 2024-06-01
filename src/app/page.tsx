
import styles from './styles.module.scss'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles['main']}>
      <div className={styles['mainDiv']}>
        <div className={styles['Titl']}>
          Dashboard
        </div>
        <div className={styles['total']}>
          <div className={styles['totalUser']}>

          </div>
          <div className={styles['totalUser']}>

          </div>
          <div className={styles['totalUser']}>

          </div>
          <div className={styles['totalUser']}>

          </div>
        </div>
        <div className={styles['details']}>

        </div>
      </div>
    </div>
  )
}