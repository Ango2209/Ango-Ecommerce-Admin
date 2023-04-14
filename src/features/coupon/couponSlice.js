import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import couponService from "./couponService";
import extraReducersFactory from "../extraReducerFactory/extraReducerFactory";
export const getCoupons = createAsyncThunk(
  "color/get-colors",
  async (thunkAPI) => {
    try {
      return await couponService.getCoupons();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getACoupon = createAsyncThunk(
  "coupon/get-coupon",
  async (id, thunkAPI) => {
    try {
      return await couponService.getACoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateACoupon = createAsyncThunk(
  "color/update-color",
  async (id, thunkAPI) => {
    try {
      return await couponService.updateACoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteACoupon = createAsyncThunk(
  "color/delete-color",
  async (id, thunkAPI) => {
    try {
      return await couponService.deleteACoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createCoupon = createAsyncThunk(
  "coupon/create-coupon",
  async (couponData, thunkAPI) => {
    try {
      return await couponService.createCoupon(couponData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  storageData: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    extraReducersFactory(
      builder,
      getCoupons,
      createCoupon,
      getACoupon,
      updateACoupon,
      deleteACoupon
    ),
});
export default couponSlice.reducer;
