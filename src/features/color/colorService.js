import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";
const getColors = async () => {
  const response = await axios.get(`${base_url}color/`);

  return response.data;
};
const getAColor = async () => {
  const response = await axios.get(`${base_url}color/:id`);

  return response.data;
};
const updateAColor = async (color) => {
  const response = await axios.put(
    `${base_url}color/${color.id}`,
    { title: color.colorData.title },
    config
  );

  return response.data;
};

const deleteAColor = async (id) => {
  const response = await axios.delete(`${base_url}color/${id}`, config);

  return response.data;
};
const createColor = async (color) => {
  try {
    const response = await axios.post(`${base_url}color/`, color, config);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const colorService = {
  getColors,
  createColor,
  getAColor,
  updateAColor,
  deleteAColor,
};

export default colorService;
