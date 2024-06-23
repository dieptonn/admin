'use client'
import styles from './styles.module.scss'
import Image from 'next/image';
import React, { useEffect, useState } from "react";


const Page = () => {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={styles['main']} >
            <div className={styles['mainDiv']}>
                <div className={styles['TitlDiv']}>
                    <div className={styles['Titl']}>
                        Dashboard
                    </div>
                </div>
                <div className={styles['fbDiv']}>
                    <div className={styles['searchDiv']}>
                        <div className={styles['search']}>
                            <Image width={15} height={15} src="/image/search.svg" alt="" />
                            <input className={styles['input']} type="text" name="" id="" placeholder='Search' />
                        </div>
                        <Image width={131} height={40} src="/image/action.svg" alt="" />
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/GoldenStar.svg" alt="" />
                            <div className={styles['name']}>
                                Nguyễn Hoài Nam
                            </div>
                            <div className={styles['action']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Trải nghiệm khá tệ, lơ xe đuổi tôi xuống vì tôi là lao công
                            </div>
                        </div>
                        <div className={styles['time']}>
                            6:58 AM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/GoldenStar.svg" alt="" />
                            <div className={styles['name']}>
                                Ngô Công Thắng
                            </div>
                            <div className={styles['action2']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Chất lượng tuyệt vời
                            </div>
                        </div>
                        <div className={styles['time']}>
                            7:30 AM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Hồ Viết Đạt
                            </div>
                            <div className={styles['action4']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Niềm nở với khách hàng, luôn chào hỏi, thật đáng tuyên dương
                            </div>
                        </div>
                        <div className={styles['time']}>
                            10:15 AM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Đỗ Duy Tiến
                            </div>
                            <div className={styles['action2']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Dịch vụ tất tốt
                            </div>
                        </div>
                        <div className={styles['time']}>
                            11:42 AM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Nguyễn Thị Hải Hà
                            </div>
                            <div className={styles['action2']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Chất lượng khá tệ, đông đúc không có chỗ ngồi
                            </div>
                        </div>
                        <div className={styles['time']}>
                            12:05 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/GoldenStar.svg" alt="" />
                            <div className={styles['name']}>
                                Nguyễn Văn Lực
                            </div>
                            <div className={styles['action4']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Ghế bẩn không lau chùi
                            </div>
                        </div>
                        <div className={styles['time']}>
                            14:20 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Đông Nam Á
                            </div>
                            <div className={styles['action4']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Tài xế không có tính lịch sự với khách hàng
                            </div>
                        </div>
                        <div className={styles['time']}>
                            15:17 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Hoàng Việt Quách
                            </div>
                            <div className={styles['action4']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Tài xế rất chu đáo với người khuyết tật
                            </div>
                        </div>
                        <div className={styles['time']}>
                            17:28 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Đỗ Vũ Linh
                            </div>
                            <div className={styles['action']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Điều hòa hỏng
                            </div>
                        </div>
                        <div className={styles['time']}>
                            19:22 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/GoldenStar.svg" alt="" />
                            <div className={styles['name']}>
                                Nguyễn Quốc Đạt
                            </div>
                            <div className={styles['action']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Đi quá nhanh, ảnh hưởng người đi đường
                            </div>
                        </div>
                        <div className={styles['time']}>
                            21:12 PM
                        </div>
                    </div>
                    <div className={styles['fb']}>
                        <div className={styles['fbs']}>
                            <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                            <Image width={24} height={24} src="/image/Star.svg" alt="" />
                            <div className={styles['name']}>
                                Trần Vũ Tiến Công
                            </div>
                            <div className={styles['action2']}>
                                Feedback
                            </div>
                            <div className={styles['content']}>
                                Tài xế vươt đèn đỏ
                            </div>
                        </div>
                        <div className={styles['time']}>
                            22:38 PM
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page;