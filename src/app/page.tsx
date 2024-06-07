'use client'
import styles from './styles.module.scss'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, LineChart, AreaChart, Line } from 'recharts';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DownOutlined, BarChartOutlined, LineChartOutlined, AreaChartOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
import type { MenuProps } from 'antd';

// Define interfaces for the API data structure
interface BusData {
  bus_plate: string;
  passenger_count: number;
}

interface GraphData {
  time: string;
  buses: BusData[];
}

interface RouteData {
  route: string;
  total_passenger: number;
  graph_data: GraphData[];
}

interface ApiResponse {
  from: string;
  to: string;
  duration: string;
  sum_passenger: number;
  graph_data: RouteData[];
}

interface Data {
  time: string;
  [key: string]: number | string; // Allow dynamic keys for bus plates
}

export default function Home() {
  const [chartType, setChartType] = useState<'line' | 'area' | 'bar'>('line');
  const [startIndex, setStartIndex] = useState(20);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [route22Data, setRoute22Data] = useState<RouteData | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin');
        const modifiedData = response.data.graph_data.map((route: RouteData) => ({
          ...route,
          graph_data: route.graph_data.map(graph => ({
            ...graph,
            time: graph.time.split(' ')[1] // Lấy phần tử sau khoảng trắng
          })).reverse()
        }));
        setApiData({ ...response.data, graph_data: modifiedData });
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  // Filter data for route 22 when apiData changes
  useEffect(() => {
    if (apiData) {
      const route22 = apiData.graph_data.find(route => route.route === '22');
      if (route22) {
        setRoute22Data(route22);
      }
    }
  }, [apiData]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info(`Switched to ${e.key === '1' ? 'Line' : e.key === '2' ? 'Area' : 'Bar'} Chart.`);
    setChartType(e.key === '1' ? 'line' : e.key === '2' ? 'area' : 'bar');
  };


  const items: MenuProps['items'] = [
    {
      label: 'Line Chart',
      key: '1',
      icon: <LineChartOutlined />,
      danger: true,
    },
    {
      label: 'Area Chart',
      key: '2',
      icon: <AreaChartOutlined />,
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

  // Prepare data for the chart
  let dataChart: Data[] = [];
  if (route22Data) {
    dataChart = route22Data.graph_data.flatMap((record: GraphData) => {
      const entry: Data = { time: record.time };
      record.buses.forEach((bus: BusData) => {
        entry[bus.bus_plate] = bus.passenger_count;
      });
      return entry;
    });
  }

  const itemsPerPage = 20;
  const visibleData = dataChart.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < dataChart.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  // Define colors for buses
  const colors = ['#FFD700', '#ED32F1', '#00F0FF', '#FF5733', '#51FA35'];

  return (
    <div className={styles['main']}>
      <div className={styles['mainDiv']}>
        <div className={styles['Titl']}>
          Dashboard
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


          {chartType === 'line' && (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                {route22Data && route22Data.graph_data[0].buses.map((bus, index) => (
                  <Line key={bus.bus_plate} dataKey={bus.bus_plate} fill={colors[index]} stroke={colors[index]} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}

          {chartType === 'area' && (
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  {route22Data && route22Data.graph_data[0].buses.map((bus, index) => (
                    <linearGradient key={index} id={`color${bus.bus_plate}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors[index]} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors[index]} stopOpacity={0} />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                {route22Data && route22Data.graph_data[0].buses.map((bus, index) => (
                  <Area key={bus.bus_plate} dataKey={bus.bus_plate} stroke={colors[index]} fillOpacity={1} fill={`url(#color${bus.bus_plate})`} />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          )}


          {chartType === 'bar' && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  {route22Data && route22Data.graph_data[0].buses.map((bus, index) => (
                    <linearGradient key={index} id={`color${bus.bus_plate}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors[index]} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors[index]} stopOpacity={0} />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                {route22Data && route22Data.graph_data[0].buses.map((bus, index) => (
                  <Bar key={bus.bus_plate} dataKey={bus.bus_plate} stroke={colors[index]} fillOpacity={1} fill={`url(#color${bus.bus_plate})`} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          )}

          <div className={styles['btn']}>
            <Button onClick={handlePrevClick} disabled={startIndex === 0}>Pres</Button>
            <Button onClick={handleNextClick} disabled={startIndex + itemsPerPage >= dataChart.length}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
