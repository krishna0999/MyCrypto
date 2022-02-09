import "./App.css";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CoinDetails />}
              ></Route>
            </Routes>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              MyCrypto <br />
              All rights reserved
            </Typography.Title>

            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
