import { Button, Card, Col, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CountryChart from './CountryChart';
import './Statistics.css';
import {
  fetchByCountry,
  fetchCountries,
  fetchSummary,
  selectSummary,
  selectCountries,
  selectCountryInfo,
} from './statisticsSlice';
import InfiniteScroll from 'react-infinite-scroller';
import { GlobalSummary } from './Country';

const Statistics = () => {
  const countryData = useAppSelector(selectCountries);
  const summary = useAppSelector(selectSummary);
  const countryInfo = useAppSelector(selectCountryInfo);
  const dispatch = useAppDispatch();

  const [country, setCountry] = useState('');

  useEffect(() => {
    dispatch(fetchSummary());
  }, []);

  const handleCountry = (id: string) => {
    // console.log('handleCountry :' + id);
    setCountry(id);
    dispatch(fetchByCountry(id));
  };

  const handleInfiniteOnLoad = () => {};

  const style = { background: '#0092ff', padding: '8px 0' };
  const summaryCards = () => {
    Object.entries(summary!.Global).map(([key, value]) => {
      console.log(key, value);
      return (
        <Col className='gutter-row' span={6}>
          <div style={style}>
            <Card title={key} bordered={false} style={{ width: 300 }}>
              <p>{value}</p>
            </Card>
          </div>
        </Col>
      );
    });

    return <div></div>;
  };

  return (
    <div>
      <h2>Statistics</h2>
      {summary ? (
        // (
        //   <Row gutter={[8, 8]} justify='start'>
        //     <Col className='gutter-row' span={4}>
        //       <div style={style}>
        //         <Card
        //           title='NewConfirmed'
        //           bordered={false}
        //           style={{ width: '100%' }}
        //         >
        //           <h2>{summary.Global.NewConfirmed}</h2>
        //         </Card>
        //       </div>
        //     </Col>
        //     <Col className='gutter-row' span={4}>
        //       <div style={style}>
        //         <Card
        //           title='NewConfirmed'
        //           bordered={false}
        //           style={{ width: '100%' }}
        //         >
        //           <h2>{summary.Global.NewConfirmed}</h2>
        //         </Card>
        //       </div>
        //     </Col>
        //   </Row>
        // ) :

        <Row gutter={[8, 8]} justify='start'>
          {Object.entries(summary.Global).map(([key, value]) => {
            return (
              <Col className='gutter-row' span={4} key={key}>
                <div style={style}>
                  <Card title={key} bordered={false} style={{ width: '100%' }}>
                    <h2>{value}</h2>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div>Summary loading....</div>
      )}

      <Row>
        <Col span={6}>
          {summary && summary.Countries.length > 0 ? (
            <div>
              <Row>
                <div className='cov-infinite-container'>
                  <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={handleInfiniteOnLoad}
                    hasMore={false}
                    useWindow={false}
                  >
                    <List
                      size='small'
                      // header={<div>Header</div>}
                      // footer={<div>Footer</div>}
                      bordered
                      dataSource={summary.Countries}
                      renderItem={(item) => (
                        <List.Item
                          key={item.Slug}
                          // extra={item.ISO2}
                          actions={[
                            <Button
                              // type='danger'
                              size='small'
                              onClick={() => handleCountry(item.Slug)}
                            >
                              Show
                            </Button>,
                          ]}
                        >
                          {item.Country}
                        </List.Item>
                      )}
                    />
                  </InfiniteScroll>
                </div>
              </Row>
            </div>
          ) : (
            'Loading.............'
          )}
        </Col>
        <Col span={18}>
          {country ? (
            <h2>
              Showing statistics for <span>{country}</span>
              <CountryChart countryInfo={countryInfo} />
            </h2>
          ) : (
            <h3>Please select a sub-page.</h3>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
