
import styles from './styles.module.scss'

const Page = () => {
    return (
        <div className={styles['main']}>
            <div className={styles['mainDiv']}>
                <div className={styles['TitlDiv']}>
                    <div className={styles['Titl']}>
                        Dashboard
                    </div>
                </div>
                <div className={styles['fbDiv']}>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Page;