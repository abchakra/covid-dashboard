import { Button, Col, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CountryChart from './CountryChart';
import {
  fetchByCountry,
  fetchCountries,
  fetchSummary,
  selectCountries,
  selectCountryInfo,
} from './statisticsSlice';
import InfiniteScroll from 'react-infinite-scroller';

const Statistics = () => {
  const countryData = useAppSelector(selectCountries);
  const countryInfo = useAppSelector(selectCountryInfo);
  const dispatch = useAppDispatch();

  const [country, setCountry] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const handleCountry = (id: string) => {
    // console.log('handleCountry :' + id);
    setCountry(id);
    dispatch(fetchByCountry(id));
  };

  const handleInfiniteOnLoad = () => {};

  return (
    <div>
      <div>Statistics</div>
      <Row>
        <Col span={6}>
          {countryData.length > 0 ? (
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
                  dataSource={countryData}
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
