

import styles from './styles.module.scss'
import Image from 'next/image'




export default function Header() {
    return (
        <div className={styles['header']}>
            <div className={styles['searchDiv']}>
                <Image width={20} height={20} src="/image/search.svg" alt="" />
                <div className={styles['searchTxt']}>
                    Search
                </div>
            </div>
            <div className={styles['proDiv']}>
                <Image width={32} height={32} src="/image/icon.svg" alt="" />

                <Image width={50} height={50} src="/image/avatar.png" alt="" />

                <div className={styles['nameDiv']}>
                    <div className={styles['name']}>
                        TheDuc
                    </div>
                    <div className={styles['admin']}>
                        Admin
                    </div>
                </div>
                <Image width={24} height={24} src="/image/More.svg" alt="" />

            </div>
        </div>
    )
}