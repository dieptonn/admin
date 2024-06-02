'use client'
import styles from './styles.module.scss'
import Image from 'next/image'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar } from 'recharts';
import React, { useState } from 'react';
import { DownOutlined, UserOutlined, BarChartOutlined, LineChartOutlined, AreaChartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space } from 'antd';





interface Data {
  name: string;
  X01: number;
  X02: number;
  X03: number;
}

export default function Home() {


  const [chartType, setChartType] = useState<'line' | 'area' | 'bar'>('area');

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info(`Switched to ${e.key === '1' ? 'Area' : e.key === '2' ? 'Line' : 'Bar'} Chart.`);
    setChartType(e.key === '1' ? 'area' : e.key === '2' ? 'line' : 'bar');
  };

  const items: MenuProps['items'] = [
    {
      label: 'Area Chart',
      key: '1',
      icon: <AreaChartOutlined />,
      danger: true,
    },
    {
      label: 'Line Chart',
      key: '2',
      icon: <LineChartOutlined />,
    },
    {
      label: 'Bar Chart',
      key: '3',
      icon: <BarChartOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


  const data: Data[] = [
    { name: 'Chuyến 5 giờ', X01: 40, X02: 24, X03: 20 },
    { name: 'Chuyến 6 giờ', X01: 30, X02: 13, X03: 21 },
    { name: 'Chuyến 7 giờ', X01: 20, X02: 9, X03: 29 },
    { name: 'Chuyến 8 giờ', X01: 27, X02: 39, X03: 20 },
    { name: 'Chuyến 9 giờ', X01: 18, X02: 48, X03: 21 },
    { name: 'Chuyến 10 giờ', X01: 23, X02: 38, X03: 25 },
    { name: 'Chuyến 11 giờ', X01: 34, X02: 43, X03: 21 }
  ];


  return (
    <div className={styles['main']}>
      <div className={styles['mainDiv']}>
        <div className={styles['Titl']}>
          Dashboard
        </div>
        <div className={styles['total']}>
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
                <div className={styles['txt1']}>
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
        </div>
        <div className={styles['details']}>
          <div className={styles['detailsDiv']}>
            <div className={styles['detailsTit']}>
              Sales Details
            </div>
            <div>
              <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                Chart type
              </Dropdown.Button>
            </div>
          </div>
          {chartType === 'area' && (
            <AreaChart width={1630} height={450} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorX01" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#51FA35" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#51FA35" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorX02" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ED32F1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ED32F1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorX03" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="0 2" />
              <Tooltip />
              <Area type="monotone" dataKey="X01" stroke="#51FA35" fillOpacity={1} fill="url(#colorX01)" />
              <Area type="monotone" dataKey="X02" stroke="#ED32F1" fillOpacity={1} fill="url(#colorX02)" />
              <Area type="monotone" dataKey="X03" stroke="#00F0FF" fillOpacity={1} fill="url(#colorX03)" />

            </AreaChart>
          )}

          {chartType === 'line' && (
            <LineChart width={1630} height={450} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorX01" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#51FA35" stopOpacity={1} />
                  <stop offset="95%" stopColor="#51FA35" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorX02" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ED32F1" stopOpacity={1} />
                  <stop offset="95%" stopColor="#ED32F1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorX03" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F0FF" stopOpacity={1} />
                  <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="0 2" />
              <Tooltip />
              <Line type="monotone" dataKey="X01" stroke="#51FA35" fillOpacity={1} fill="url(#colorX01)" />
              <Line type="monotone" dataKey="X02" stroke="#ED32F1" fillOpacity={1} fill="url(#colorX02)" />
              <Line type="monotone" dataKey="X03" stroke="#00F0FF" fillOpacity={1} fill="url(#colorX03)" />

            </LineChart>
          )}

          {chartType === 'bar' && (
            <BarChart width={1630} height={450} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorX01" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#51FA35" stopOpacity={0.9} />
                  {/* <stop offset="95%" stopColor="#51FA35" stopOpacity={0} /> */}
                </linearGradient>
                <linearGradient id="colorX02" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ED32F1" stopOpacity={0.9} />
                  {/* <stop offset="95%" stopColor="#ED32F1" stopOpacity={0} /> */}
                </linearGradient>
                <linearGradient id="colorX03" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.9} />
                  {/* <stop offset="95%" stopColor="#00F0FF" stopOpacity={0} /> */}
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="0 3" />
              <Tooltip />
              <Bar type="monotone" dataKey="X01" stroke="#51FA35" fillOpacity={1} fill="url(#colorX01)" />
              <Bar type="monotone" dataKey="X02" stroke="#ED32F1" fillOpacity={1} fill="url(#colorX02)" />
              <Bar type="monotone" dataKey="X03" stroke="#00F0FF" fillOpacity={1} fill="url(#colorX03)" />

            </BarChart>
          )}
        </div>
      </div>
    </div>
  )
}