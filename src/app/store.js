import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customer/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pcategoryReducer from "../features/pcategory/pcategorySlice";
import blogReducer from "../features/blogs/blogSlice";
import bCategory from "../features/bcategory/bcategorySlice";
import colorReducer from "../features/color/colorSlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pcategory: pcategoryReducer,
    blog: blogReducer,
    bCategory: bCategory,
    color: colorReducer,
    upload: uploadReducer,
    coupon: couponReducer,
    enquiry: enquiryReducer,
  },
});
