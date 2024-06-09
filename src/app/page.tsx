'use client'
import styles from './styles.module.scss'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, AreaChart, Line, Area } from 'recharts';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DownOutlined, BarChartOutlined, LineChartOutlined, AreaChartOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image'
import CustomTooltip from '@/services/customTooltip';

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
  const [startIndex, setStartIndex] = useState(0);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [selectedRouteData, setSelectedRouteData] = useState<RouteData | null>(null);
  const [selectedBuses, setSelectedBuses] = useState<string[]>([]);
  const [showAllData, setShowAllData] = useState(false); // New state to control data display

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nextstore-be.onrender.com/api/v1/home/admin');
        const modifiedData = response.data.graph_data.map((route: RouteData) => ({
          ...route,
          graph_data: route.graph_data.map(graph => ({
            ...graph,
            time: graph.time.split(' ')[1] // Lấy phần tử sau khoảng trắng
          })).reverse()
        }));

        setApiData({ ...response.data, graph_data: modifiedData });
        if (modifiedData.length > 0) {
          setSelectedRouteData(modifiedData[0]);
          setStartIndex(Math.max(0, modifiedData[0].graph_data.length - 18)); // Set initial startIndex
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  // Handle chart type change
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info(`Switched to ${e.key === '1' ? 'Line' : e.key === '2' ? 'Area' : 'Bar'} Chart.`);
    setChartType(e.key === '1' ? 'line' : e.key === '2' ? 'area' : 'bar');
  };

  const chartTypeItems: MenuProps['items'] = [
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

  const chartTypeMenuProps = {
    items: chartTypeItems,
    onClick: handleMenuClick,
  };

  // Handle route change
  const handleRouteChange: MenuProps['onClick'] = (e) => {
    const selectedRoute = e.key;
    const routeData = apiData?.graph_data.find(route => route.route === selectedRoute);
    if (routeData) {
      setSelectedRouteData(routeData);
      setStartIndex(Math.max(0, routeData.graph_data.length - 18)); // Set start index to show last 20 entries
    }
  };

  const routeItems: MenuProps['items'] = apiData?.graph_data.map(route => ({
    label: `Route ${route.route}`,
    key: route.route,
  }));

  const routeMenuProps = {
    items: routeItems,
    onClick: handleRouteChange,
  };

  // Prepare data for the chart
  let dataChart: Data[] = [];
  if (selectedRouteData) {
    dataChart = selectedRouteData.graph_data.flatMap((record: GraphData) => {
      const entry: Data = { time: record.time };
      record.buses.forEach((bus: BusData) => {
        entry[bus.bus_plate] = bus.passenger_count;
      });
      return entry;
    });
  }

  const itemsPerPage = 18;
  const visibleData = showAllData ? dataChart : dataChart.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(Math.max(0, startIndex - itemsPerPage));
    }
  };

  const handleNextClick = () => {
    if (startIndex + itemsPerPage < dataChart.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const toggleBusSelection = (busPlate: string) => {
    const updatedSelectedBuses = selectedBuses.includes(busPlate)
      ? selectedBuses.filter(plate => plate !== busPlate)
      : [...selectedBuses, busPlate];
    setSelectedBuses(updatedSelectedBuses);
  };

  const isBusSelected = (busPlate: string) => {
    return selectedBuses.length === 0 || selectedBuses.includes(busPlate);
  };

  // Define colors for buses
  const colors = ['#FFD700', '#ED32F1', '#00F0FF', '#FF5733', '#51FA35'];

  return (
    <div className={styles['main']}>
      <div className={styles['mainDiv']}>
        <div className={styles['TitlDiv']}>
          <div className={styles['Titl']}>
            Dashboard
          </div>
          <div>
            <Dropdown.Button menu={routeMenuProps}>
              {selectedRouteData ? `Route ${selectedRouteData.route}` : 'Select Route'}
            </Dropdown.Button>
          </div>
        </div>
        <div className={styles['total']}>
          <div className={styles['totalUser']}>
            <div className={styles['titl']}>
              Total Passenger
            </div>
            <div className={styles['num']}>
              {apiData ? apiData.sum_passenger : 'Loading...'}
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
              Route Passenger
            </div>
            <div className={styles['num']}>
              {selectedRouteData ? selectedRouteData.total_passenger : 'Loading...'}
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
              Total imcome
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
        </div>
        <div className={styles['details']}>
          <div className={styles['detailsDiv']}>
            <div className={styles['detailsTit']}>
              Sales Details
            </div>
            <div className={styles['detailsTit1']}>
              <Button onClick={() => setShowAllData(false)}>1.5h</Button>
              <Button onClick={() => setShowAllData(true)}>3h</Button>
              <div>
                <Dropdown.Button menu={chartTypeMenuProps}>
                  {chartType === 'line' ? 'Line Chart' : chartType === 'area' ? 'Area Chart' : 'Bar Chart'}
                </Dropdown.Button>
              </div>
            </div>
          </div>

          {chartType === 'line' && (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                {selectedRouteData && selectedRouteData.graph_data[0].buses.map((bus, index) => (
                  <Line
                    key={bus.bus_plate}
                    dataKey={bus.bus_plate}
                    stroke={isBusSelected(bus.bus_plate) ? colors[index] : '#273142'} // Use different color for selected/unselected buses
                    strokeWidth={isBusSelected(bus.bus_plate) ? 2 : 1} // Adjust stroke width based on selection
                    dot={isBusSelected(bus.bus_plate) ? { r: 4 } : false}
                    animationDuration={500}
                  />
                ))}
                <Legend
                  payload={selectedRouteData ? selectedRouteData.graph_data[0].buses.map((bus, index) => ({
                    value: bus.bus_plate,
                    type: 'line',
                    id: bus.bus_plate || '', // Ensure id is not undefined
                    color: isBusSelected(bus.bus_plate) ? colors[index] : '', // Use different color for selected/unselected buses
                  })) : []} // Provide an empty array if payload is null or undefined
                  onClick={(e) => {
                    const busPlate = e.id;
                    toggleBusSelection(busPlate ?? ''); // Ensure busPlate is not undefined
                  }} // Toggle bus selection on click
                />
              </LineChart>
            </ResponsiveContainer>
          )}

          {chartType === 'area' && (
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  {selectedRouteData && selectedRouteData.graph_data[0].buses.map((bus, index) => (
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
                <Legend />
                {selectedRouteData && selectedRouteData.graph_data[0].buses.map((bus, index) => (
                  <Area key={bus.bus_plate} dataKey={bus.bus_plate} stroke={colors[index]} fillOpacity={1} fill={`url(#color${bus.bus_plate})`} />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          )}

          {chartType === 'bar' && (
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={visibleData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  {selectedRouteData && selectedRouteData.graph_data[0].buses.map((bus, index) => (
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
                <Legend />
                {selectedRouteData && selectedRouteData.graph_data[0].buses.map((bus, index) => (
                  <Bar key={bus.bus_plate} dataKey={bus.bus_plate} stroke={colors[index]} fillOpacity={1} fill={`url(#color${bus.bus_plate})`} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          )}

          {!showAllData && (
            <div className={styles['btn']}>
              <Button onClick={handlePrevClick} disabled={startIndex === 0}>Prev</Button>
              <Button onClick={handleNextClick} disabled={startIndex + itemsPerPage >= dataChart.length}>Next</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
