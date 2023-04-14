import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";
const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);
  return response.data;
};
const getABlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`, config);

  return response.data;
};
const updateABlog = async (blog) => {
  const response = await axios.put(
    `${base_url}blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};
const deleteABlog = async (id) => {
  const response = await axios.delete(`${base_url}blog/${id}`, config);

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
