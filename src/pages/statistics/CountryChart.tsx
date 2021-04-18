import React, { useEffect, useState } from 'react';
import { Button, Col, List, Row } from 'antd';
import { CountryInfo } from './Country';
import './CountryChart.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import moment from 'moment';
import CustomTooltip from './CustomTooltip';
import { Brush } from 'recharts';
interface CountryChartProps {
  countryInfo: CountryInfo[];
}

const CountryChart = (props: CountryChartProps) => {
  const { countryInfo } = props;

  const orange = '#e67e22';
  const red = '#e74c3c';
  const green = '#27ae60';
  let [color, setColor] = useState(orange);
  let [activeIndex, setActive] = useState(0);

  let [type, setType] = useState('Active');
  // let country;
  const amount_Active = countryInfo.map((a) => a.Active);
  let latest_Active = Math.max(...amount_Active);
  const amount_deaths = countryInfo.map((a) => a.Deaths);
  let latest_deaths = Math.max(...amount_deaths);
  const amount_recovered = countryInfo.map((a) => a.Recovered);
  let latest_recovered = Math.max(...amount_recovered);
  // const getCountries = countryInfo.map((a) => a.Country);
  // country = getCountries.slice(0, 1);

  const BUTTONS = [
    {
      name: 'Active',
      color: orange,
      value: latest_Active,
      id: 1,
    },
    {
      name: 'Deaths',
      color: red,
      value: latest_deaths,
      id: 2,
    },
    {
      name: 'Recovered',
      color: green,
      value: latest_recovered,
      id: 3,
    },
  ];

  //   const formatXAxis = (tickItem: any) => {
  //     console.log(moment(tickItem).format('D MMM'));
  //     return moment(tickItem).format('D MMM');
  //   };
  const xAxisTickFormatter = (timestamp_measured: any) => {
    return moment(timestamp_measured).format('ll').slice(0, 6);
  };
  const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const dateTip = moment(payload.value).format('ll').slice(0, 6);
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={23}
          y={0}
          dy={14}
          fontSize='0.90em'
          fontFamily='bold'
          textAnchor='end'
          fill='#363636'
        >
          {dateTip}
        </text>
      </g>
    );
  };
  return (
    <div>
      {
        <div>
          {countryInfo.length > 0 ? (
            <div>
              <Row>
                {BUTTONS.map((item, index) => (
                  <div className='column' key={index}>
                    <h2>
                      <Button
                        style={{ color: item.color === color ? color : '#000' }}
                        onClick={() => [
                          setType(item.name),
                          setActive(index),
                          setColor(item.color),
                        ]}
                        className={
                          activeIndex === index
                            ? 'column__button title is-3 selected'
                            : 'column__button title is-3'
                        }
                      >
                        {item.name}
                      </Button>
                    </h2>
                    <p className='subtitle is-4'>
                      {item.value.toLocaleString()}
                    </p>
                  </div>
                ))}
              </Row>
              <Row>
                <ResponsiveContainer width='90%' height={400}>
                  <AreaChart
                    width={800}
                    height={400}
                    data={countryInfo}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey='Date' tick={CustomizedAxisTick} />
                    <YAxis />
                    <Tooltip
                      content={<CustomTooltip />}
                      animationDuration={0}
                    />
                    <Legend />
                    <Area
                      type='monotone'
                      dataKey={type}
                      // fill='#e67e22'
                      // stroke='#e67e22'
                      fill={color}
                      stroke={color}
                    />
                    <Brush tickFormatter={xAxisTickFormatter} dataKey='Date' />
                  </AreaChart>
                </ResponsiveContainer>
              </Row>
            </div>
          ) : (
            'Loading info for country.............'
          )}
        </div>
      }
    </div>
  );
};

export default CountryChart;
// {countryInfo.length > 0
//          ? countryInfo.map((value, index) => (
//              <li key={index}>
//                {value.Date} : {value.Cases}
//              </li>
//            ))
//          : 'Loading info for country.............'}
