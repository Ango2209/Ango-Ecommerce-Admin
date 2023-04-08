import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";
const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);
  return response.data;
};
const getABlog = async () => {
  const response = await axios.get(`${base_url}blog/:id`);
  return response.data;
};
const updateABlog = async () => {
  const response = await axios.put(`${base_url}blog/:id`);
  return response.data;
};
const deleteABlog = async () => {
  const response = await axios.delete(`${base_url}blog/:id`);
  return response.data;
};
const createBlog = async (blogData) => {
  const response = await axios.post(`${base_url}blog`, blogData, config);
  return response.data;
};
const blogService = {
  getBlogs,
  createBlog,
  getABlog,
  updateABlog,
  deleteABlog,
};

export default blogService;
