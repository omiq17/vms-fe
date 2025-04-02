import React, { createContext, useState, useEffect } from "react";
import { useVehicleService } from "../services/useVehicleService";

export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getVehicles } = useVehicleService();

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <VehicleContext.Provider value={{ vehicles, loading, fetchVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
};
