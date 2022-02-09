import React from "react";
import millify from "millify";
import { Typography, Col, Row, Statistic } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

import { useGetCryptosQuery } from "../sevices/cryptoApi";
import { useGetCryptoNewsQuery } from "../sevices/cryptoNews";

const { Title } = Typography;

function HomePage() {
  const { data, isFetching } = useGetCryptosQuery(100);

  // const { data, isFetching } = useGetCryptosQuery(100);

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading" style={{ padding: "1rem" }}>
        Global Crypto Stats
      </Title>
      <Row style={{ padding: "1rem" }}>
        <Col span={12}>
          <Statistic title="Total cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container" style={{ padding: "1rem" }}>
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="home-title">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container" style={{ padding: "1rem" }}>
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="home-title">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default HomePage;
