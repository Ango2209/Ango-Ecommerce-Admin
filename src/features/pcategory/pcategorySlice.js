import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pCategoryService from "./pcategoryService";
import extraReducersFactory from "../extraReducerFactory/extraReducerFactory";
export const getCategory = createAsyncThunk(
  "productCategory/get-categories",
  async (thunkAPI) => {
    try {
      return await pCategoryService.getProductCategory();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getACategory = createAsyncThunk(
  "productCategory/get-category",
  async (id, thunkAPI) => {
    try {
      return await pCategoryService.getAProductCategory(id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateACategory = createAsyncThunk(
  "productCategory/update-category",
  async (id, thunkAPI) => {
    try {
      return await pCategoryService.updateAProductCategory(id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteACategory = createAsyncThunk(
  "productCategory/delete-category",
  async (id, thunkAPI) => {
    try {
      return await pCategoryService.deleteAProductCategory(id);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createCategory = createAsyncThunk(
  "category/create-categories",
  async (categoryData, thunkAPI) => {
    try {
      return await pCategoryService.createCategory(categoryData);
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
export const pCategorySlice = createSlice({
  name: "pCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    extraReducersFactory(
      builder,
      getCategory,
      createCategory,
      getACategory,
      updateACategory,
      deleteACategory
    ),
});
export default pCategorySlice.reducer;
