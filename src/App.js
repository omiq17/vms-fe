import React from "react";
import { Layout } from "antd";
import "./App.css";
import VehicleManagement from "./components/VehicleManagement";
import { VehicleProvider } from "./contexts/VehicleContext";

const { Content } = Layout;

function App() {
  return (
    <VehicleProvider>
      <Layout className="layout">
        <Content className="site-layout-content">
          <VehicleManagement />
        </Content>
      </Layout>
    </VehicleProvider>
  );
}

export default App;
