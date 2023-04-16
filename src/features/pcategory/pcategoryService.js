import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProductCategory = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};
const getAProductCategory = async (id) => {
  const response = await axios.get(`${base_url}category/:id`);

  return response.data;
};
const updateAProductCategory = async (category) => {
  const response = await axios.put(
    `${base_url}category/${category.id}`,
    { title: category.pCatData.title },
    config
  );

  return response.data;
};
const deleteAProductCategory = async (id) => {
  const response = await axios.delete(`${base_url}category/${id}`, config);

  return response.data;
};
const createCategory = async (category) => {
  try {
    const response = await axios.post(`${base_url}category/`, category, config);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const pCategoryService = {
  getProductCategory,
  createCategory,
  getAProductCategory,
  updateAProductCategory,
  deleteAProductCategory,
};

export default pCategoryService;
