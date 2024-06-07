

import styles from './styles.module.scss'
import Image from 'next/image'




export default function Sidebar() {
    return (
        <div className={styles['Sidebar']}>
            <div className={styles['SidebarDiv']}>
                <Image width={32} height={32} src="/image/menu.svg" alt="" />
                <Image width={32} height={32} src="/image/dashboard.svg" alt="" />
                <Image width={32} height={32} src="/image/product.svg" alt="" />
                <Image width={32} height={32} src="/image/Favourites.svg" alt="" />
                <Image width={32} height={32} src="/image/chat.svg" alt="" />
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


{/* <div className={styles['total']}>
          <div className={styles['totalUser']}>
            <div className={styles['titl']}>
              Total User
            </div>
            <div className={styles['num']}>
              40,689
            </div>
            <div className={styles['info']}>
              <Image width={32} height={32} src="/image/up.svg" alt="" />
              <div className={styles['txt']}>
                <div className={styles['txt1']}>
                  8.5%
                </div>
                <div className={styles['txt2']}>
                  Up from yesterday
                </div>
              </div>
            </div>
            <Image className={styles['img']} width={80} height={80} src="/image/user.svg" alt="" />
          </div>
          <div className={styles['totalUser']}>
            <div className={styles['titl']}>
              Total Order
            </div>
            <div className={styles['num']}>
              10293
            </div>
            <div className={styles['info']}>
              <Image width={32} height={32} src="/image/up.svg" alt="" />
              <div className={styles['txt']}>
                <div className={styles['txt1']}>
                  1.3%
                </div>
                <div className={styles['txt2']}>
                  Up from past week
                </div>
              </div>
            </div>
            <Image className={styles['img']} width={80} height={80} src="/image/order.svg" alt="" />
          </div>
          <div className={styles['totalUser']}>
            <div className={styles['titl']}>
              Total Sales
            </div>
            <div className={styles['num']}>
              $89,000
            </div>
            <div className={styles['info']}>
              <Image width={32} height={32} src="/image/down.svg" alt="" />
              <div className={styles['txt']}>
                <div className={styles['txt3']}>
                  4.3%
                </div>
                <div className={styles['txt2']}>
                  Down from yesterday
                </div>
              </div>
            </div>
            <Image className={styles['img']} width={80} height={80} src="/image/sale.svg" alt="" />
          </div>
          <div className={styles['totalUser']}>
            <div className={styles['titl']}>
              Total Pending
            </div>
            <div className={styles['num']}>
              2040
            </div>
            <div className={styles['info']}>
              <Image width={32} height={32} src="/image/up.svg" alt="" />
              <div className={styles['txt']}>
                <div className={styles['txt1']}>
                  1.8%
                </div>
                <div className={styles['txt2']}>
                  Up from yesterday
                </div>
              </div>
            </div>
            <Image className={styles['img']} width={80} height={80} src="/image/pending.svg" alt="" />
          </div>
        </div> */}