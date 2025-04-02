import React from "react";
import { Form, Select, InputNumber, Button } from "antd";
import { useVehicleService } from "../services/useVehicleService";

const { Option } = Select;

// Vehicle types and statuses for dropdown options
const vehicleTypes = ["SCOOTER", "CAR"];
const vehicleStatuses = ["PARKING", "MOVING", "IDLING", "TOWING"];

const VehicleForm = ({ form, onCancel, onSuccess }) => {
  const { addVehicle, loading } = useVehicleService();

  const handleSubmit = async (values) => {
    try {
      const payload = {
        type: values.type,
        is_locked: values.lock === "Lock",
        speed: parseInt(values.speed),
        battery: parseInt(values.battery),
        status: values.status,
        latitude: parseFloat(values.latitude),
        longitude: parseFloat(values.longitude),
      };

      await addVehicle(payload);
      onSuccess();
    } catch (error) {
      console.error("Error adding vehicle:", error);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="type"
        label="Type"
        rules={[{ required: true, message: "Please select vehicle type" }]}
      >
        <Select placeholder="Select vehicle type">
          {vehicleTypes.map((type) => (
            <Option key={type} value={type}>
              {type}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="lock"
        label="Lock/Unlock"
        rules={[{ required: true, message: "Please select lock status" }]}
      >
        <Select placeholder="Select lock status">
          <Option value="Lock">Lock</Option>
          <Option value="Unlock">Unlock</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="speed"
        label="Speed (km/h)"
        rules={[{ required: true, message: "Please enter speed" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="battery"
        label="Battery Level (%)"
        rules={[{ required: true, message: "Please enter battery level" }]}
      >
        <InputNumber min={0} max={100} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "Please select status" }]}
      >
        <Select placeholder="Select vehicle status">
          {vehicleStatuses.map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        name="latitude"
        label="Latitude"
        rules={[{ required: true, message: "Please enter latitude" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="longitude"
        label="Longitude"
        rules={[{ required: true, message: "Please enter longitude" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button style={{ marginRight: 8 }} onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Vehicle
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default VehicleForm;
