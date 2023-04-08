import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";
const getCoupons = async () => {
  const response = await axios.get(`${base_url}coupon/`);

  return response.data;
};
const getACoupon = async () => {
  const response = await axios.get(`${base_url}coupon/:id`);

  return response.data;
};
const updateACoupon = async () => {
  const response = await axios.put(`${base_url}coupon/:id`);

  return response.data;
};
const deleteACoupon = async () => {
  const response = await axios.delete(`${base_url}coupon/:id`);

  return response.data;
};
const createCoupon = async (color) => {
  try {
    const response = await axios.post(`${base_url}coupon/`, color, config);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const couponService = {
  getCoupons,
  createCoupon,
  getACoupon,
  updateACoupon,
  deleteACoupon,
};

export default couponService;
