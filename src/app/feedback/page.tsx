'use client'
import styles from './styles.module.scss'
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import axios from 'axios';

type Feedback = {
    user_name: string;
    content: string;
};

const Page = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Feedback[]>('https://hanoibus.pro/feedback', {
                    httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false })
                });
                setFeedbacks(response.data);
            } catch (error) {
                console.error("There was an error fetching the feedback data!", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles['main']}>
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
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className={styles['fb']}>
                            <div className={styles['fbs']}>
                                <Image width={24} height={24} src="/image/checkbox.svg" alt="" />
                                <Image width={24} height={24} src="/image/GoldenStar.svg" alt="" />
                                <div className={styles['name']}>
                                    {feedback.user_name}
                                </div>
                                <div className={styles['action']}>
                                    Feedback
                                </div>
                                <div className={styles['content']}>
                                    {feedback.content}
                                </div>
                            </div>
                            <div className={styles['time']}>
                                6:58 AM
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;
