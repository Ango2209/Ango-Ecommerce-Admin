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
  "bCategory/get-bCategorie",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.getABCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateABlogCategory = createAsyncThunk(
  "bCategory/update-bCategorie",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.updateABlogCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteABlogCategory = createAsyncThunk(
  "bCategory/delete-bCategorie",
  async (id, thunkAPI) => {
    try {
      return await bCategoryService.deleteABlogCategory(id);
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
