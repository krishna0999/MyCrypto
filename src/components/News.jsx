import React, { useState } from "react";
import { Select, Typography, Card, Row, Col, Avatar } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../sevices/cryptoNews";
import { useGetCryptosQuery } from "../sevices/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
  "https://img.etimg.com/thumb/height-450,width-600,imgsize-182662,msid-87859018/india-news-updates-govt-to-introduce-cryptocurrency-bill-in-winter-session-of-parliament.jpg";

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptosNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);
  console.log(data?.data);
  return (
    <Row gutter={[24, 24]} style={{ padding: "1rem" }}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="search-news"
            placeholder="Search a Crypto"
            optionFilterProp="children"
            onChange={(value) => console.log(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptosNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name.length > 30
                    ? `${news.name.substring(0, 30)}...`
                    : news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="news"
                />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text style={{ marginLeft: "10px" }}>
                    {news.provider[0]?.name}
                  </Text>
                </div>
              </div>
              <Text style={{ display: "block", marginTop: "10px" }}>
                {moment(news?.datePublished).startOf("ss").fromNow()}
              </Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
