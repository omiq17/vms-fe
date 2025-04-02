import React, { useContext, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  InputNumber,
  message,
  Spin,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { VehicleContext } from "../contexts/VehicleContext";
import VehicleForm from "./VehicleForm";

const { Option } = Select;

const VehicleManagement = () => {
  const { vehicles, loading, fetchVehicles } = useContext(VehicleContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSuccess = () => {
    setIsModalVisible(false);
    form.resetFields();
    fetchVehicles();
    message.success("Vehicle added successfully");
  };

  // Table columns definition
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
      width: 50,
    },
    {
      title: "Vehicle ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Lock/Unlock",
      dataIndex: "lock",
      key: "lock",
      sorter: (a, b) => a.lock.localeCompare(b.lock),
    },
    {
      title: "Current Speed",
      dataIndex: "speed",
      key: "speed",
      sorter: (a, b) => parseInt(a.speed) - parseInt(b.speed),
    },
    {
      title: "Battery level",
      dataIndex: "battery",
      key: "battery",
      sorter: (a, b) => parseInt(a.battery) - parseInt(b.battery),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      sorter: (a, b) => a.location.localeCompare(b.location),
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
      sorter: (a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#8ee3c8",
          padding: "15px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "normal",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Vehicle Management
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          icon={<PlusOutlined />}
          style={{
            backgroundColor: "#8ee3c8",
            borderColor: "#8ee3c8",
            color: "#333",
          }}
        >
          New Vehicle
        </Button>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          dataSource={vehicles}
          columns={columns}
          pagination={{ pageSize: 10 }}
          size="middle"
          bordered
          style={{ backgroundColor: "#fff" }}
          rowKey="id"
        />
      )}

      {/* Modal for adding a new vehicle */}
      <Modal
        title="Add New Vehicle"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <VehicleForm
          form={form}
          onCancel={handleCancel}
          onSuccess={handleSuccess}
        />
      </Modal>
    </div>
  );
};

export default VehicleManagement;
