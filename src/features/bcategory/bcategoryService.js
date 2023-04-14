import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";
const getBCategory = async () => {
  const response = await axios.get(`${base_url}blogCategory/`);
  return response.data;
};
const getABCategory = async (id) => {
  const response = await axios.get(`${base_url}blogCategory/${id}`, config);

  return response.data;
};
const updateABCategory = async (blogCat) => {
  const response = await axios.put(
    `${base_url}blogCategory/${blogCat.id}`,
    { title: blogCat.blogCatData.title },
    config
  );

  return response.data;
};
const deleteABCategory = async (id) => {
  const response = await axios.delete(`${base_url}blogCategory/${id}`, config);

  return response.data;
};
const createBlogCategory = async (blogCategoryData) => {
  const response = await axios.post(
    `${base_url}blogCategory`,
    blogCategoryData,
    config
  );
  return response.data;
};
const bCategoryService = {
  getBCategory,
  createBlogCategory,
  getABCategory,
  updateABCategory,
  deleteABCategory,
};

export default bCategoryService;
