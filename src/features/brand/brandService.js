import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/`);
  return response.data;
};
const createBrand = async (brand) => {
  try {
    const response = await axios.post(`${base_url}brand/`, brand, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const getABrand = async (id) => {
  const response = await axios.get(`${base_url}brand/${id}`);
  return response.data;
};
const updateABrand = async (data) => {
  const { id, brandData } = data;

  const response = await axios.put(`${base_url}brand/${id}`, brandData, config);
  return response.data;
};
const deleteABrand = async (id) => {
  const response = await axios.delete(`${base_url}brand/${id}`, config);
  return response.data;
};
const brandService = {
  getBrands,
  createBrand,
  getABrand,
  updateABrand,
  deleteABrand,
};

export default brandService;
