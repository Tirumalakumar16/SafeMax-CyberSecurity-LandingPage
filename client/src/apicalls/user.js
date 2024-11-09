import axios from "axios";

const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json" },
});

export const test = async () => {
  try {
    const response = await axiosInstance.get("/api/user/test");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestForAppointment = async (data) => {
  try {
    const response = await axiosInstance.post("/api/user/appointment", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestForApproval = async () => {
  try {
    const response = await axiosInstance.get("/api/user/all-appointments");
    return response.data;
  } catch (error) {
    throw error;
  }
}


export const updateRequest = async (data) => {
  try {
    const response = await axiosInstance.put("/api/user/approve-appointment", data);
    return response.data;
  } catch (error) {
    throw error;
  }
}