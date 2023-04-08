import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

const getAProduct = async () => {
  const response = await axios.get(`${base_url}product/:id`);

  return response.data;
};
const updateAProduct = async () => {
  const response = await axios.put(`${base_url}product/:id`);

  return response.data;
};
const deleteAProduct = async () => {
  const response = await axios.delete(`${base_url}product/:id`);

  return response.data;
};
const createProducts = async (product) => {
  try {
    const response = await axios.post(`${base_url}product/`, product, config);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const productService = {
  getProducts,
  createProducts,
  getAProduct,
  updateAProduct,
  deleteAProduct,
};

export default productService;
