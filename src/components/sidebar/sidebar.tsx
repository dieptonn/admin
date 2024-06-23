"use client"
import { useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';



export default function Sidebar() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [dropdown, setDropdown] = useState(false)


  const handleImageClick = (index: any) => {
    setSelectedImage(index); // Set selected image index
  };

  return (
    <div className={styles['Sidebar']}>
      <div className={styles['SidebarDiv']}>
        <Image width={32} height={32} src="/image/menu.svg" alt="" />
        <div><Image className={selectedImage === 0 ? styles.selectedImage : ''} onClick={() => handleImageClick(0)}
          width={32} height={32} src="/image/dashboard.svg" alt="" /></div>
        <Link href="/"><Image width={32} height={32} src="/image/product.svg" alt="" /></Link>
        <Image width={32} height={32} src="/image/Favourites.svg" alt="" />
        <Link href="/feedback"><Image className={selectedImage === 0 ? styles.selectedImage : ''} onClick={() => handleImageClick(0)}
          width={32} height={32} src="/image/chat.svg" alt="" /></Link>
        <Image width={32} height={32} src="/image/orderlist.svg" alt="" />
        <Image width={32} height={32} src="/image/pricing.svg" alt="" />
        <Image width={32} height={32} src="/image/calendar.svg" alt="" />
        <Image width={32} height={32} src="/image/todo.svg" alt="" />
        <Image width={32} height={32} src="/image/contact.svg" alt="" />
        <Image width={32} height={32} src="/image/invoice.svg" alt="" />
        <Image width={32} height={32} src="/image/element.svg" alt="" />
        <Image width={32} height={32} src="/image/team.svg" alt="" />
        <Image width={32} height={32} src="/image/settings.svg" alt="" />
      </div>
      <div className={styles['logout']}>
        <Image width={32} height={32} src="/image/Logout.svg" alt="" />
      </div>
    </div>
  )
}
