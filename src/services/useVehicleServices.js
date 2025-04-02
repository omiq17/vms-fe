import { useState } from "react";
import api from "./api";
import { message } from "antd";

export const useVehicleService = () => {
  const [loading, setLoading] = useState(false);

  const getVehicles = async (filters = {}) => {
    setLoading(true);
    try {
      const response = await api.get("/vehicles", { params: filters });
      // Transform the API response to match our table structure
      const formattedData = response.data.map((vehicle) => ({
        key: vehicle.id.toString(),
        id: vehicle.id,
        type: vehicle.type,
        lock: vehicle.is_locked ? "Lock" : "Unlock",
        speed: `${vehicle.speed} km/h`,
        battery: `${vehicle.battery}%`,
        status: vehicle.status,
        location: `${vehicle.latitude},${vehicle.longitude}`,
        lastUpdated: new Date(vehicle.updated_on).toLocaleString(),
      }));
      return formattedData;
    } catch (error) {
      message.error("Failed to fetch vehicles");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const addVehicle = async (vehicleData) => {
    setLoading(true);
    try {
      const response = await api.post("/vehicles", vehicleData);
      return response.data;
    } catch (error) {
      message.error("Failed to add vehicle");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    getVehicles,
    addVehicle,
    loading,
  };
};
