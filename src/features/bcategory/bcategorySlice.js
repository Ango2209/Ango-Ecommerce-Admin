import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bcategoryService";

import extraReducersFactory from "../extraReducerFactory/extraReducerFactory";
export const getBlogCategory = createAsyncThunk(
  "bCategory/get-bCategories",
  async (thunkAPI) => {
    try {
      return await bCategoryService.getBCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getABlogCategory = createAsyncThunk(
  "bCategory/get-bCategory",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.getABCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateABlogCategory = createAsyncThunk(
  "bCategory/update-bCategories",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.updateABCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteABlogCategory = createAsyncThunk(
  "bCategory/delete-bCategories",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.deleteABCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createBlogCategory = createAsyncThunk(
  "bCategory/create-bCategories",
  async (bCatData, thunkAPI) => {
    try {
      return await bCategoryService.createBlogCategory(bCatData);
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
export const bCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    extraReducersFactory(
      builder,
      getBlogCategory,
      createBlogCategory,
      getABlogCategory,
      updateABlogCategory,
      deleteABlogCategory
    ),
});
export default bCategorySlice.reducer;
