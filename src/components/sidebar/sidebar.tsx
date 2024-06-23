"use client"
import { useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';

export default function Sidebar() {

  const [selectedImage, setSelectedImage] = useState(1);
  const [dropdown, setDropdown] = useState(false)

  const handleImageClick = (index: number) => {
    setSelectedImage(index); // Set selected image index
  };

  return (
    <div className={styles['Sidebar']}>
      <div className={styles['SidebarDiv']}>
        <Image width={32} height={32} src="/image/menu.svg" alt="" />
        <button className={styles['drop']}>
          <Image className={styles['Logo']}
            onClick={() => {
              setDropdown(!dropdown)
            }}
            width={32} height={32} src="/image/dashboard.svg" alt="" />

          <div className={dropdown ? `${styles.dropdown} ${styles.active}` : `${styles.dropdown}`}>

            <Link href="/" className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(1)}
                className={selectedImage === 1 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/product.svg" alt="" />
            </Link>

            <Link href="/feedback" className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(2)}
                className={selectedImage === 2 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/chat.svg" alt="" />
            </Link>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(3)}
                className={selectedImage === 3 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/Favourites.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(4)}
                className={selectedImage === 4 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/orderlist.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(5)}
                className={selectedImage === 5 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/pricing.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(6)}
                className={selectedImage === 6 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/calendar.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(7)}
                className={selectedImage === 7 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/todo.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(8)}
                className={selectedImage === 8 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/contact.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(9)}
                className={selectedImage === 9 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/invoice.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(10)}
                className={selectedImage === 10 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/element.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(11)}
                className={selectedImage === 11 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/team.svg" alt="" />
            </div>

            <div className={styles['icon']}>
              <Image
                onClick={() => handleImageClick(12)}
                className={selectedImage === 12 ? styles.selectedImage : ''}
                width={24} height={24} src="/image/settings.svg" alt="" />
            </div>

          </div>
        </button>
      </div>
      <div className={styles['logout']}>
        <Image width={32} height={32} src="/image/Logout.svg" alt="" />
      </div>
    </div>
  )
}
