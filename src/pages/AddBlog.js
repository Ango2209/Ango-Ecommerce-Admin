import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../features/blogs/blogSlice";
import { uploadImg, delImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import { getCategory } from "../features/pcategory/pcategorySlice";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";

let schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is Required"),
  category: Yup.string().required("Category is required"),
});
const AddBlog = () => {
  const dispatch = useDispatch();
  const imgState = useSelector((state) => state?.upload?.images);
  const img = [];
  imgState?.forEach((i) => {
    const parts = i.url.split("/");
    const public_id = parts[parts.length - 1].split(".")[0];
    img.push({
      public_id: public_id,
      url: i.url,
    });
  });
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const categoryState = useSelector(
    (state) => state?.pcategory?.storageData?.data?.data
  );
  useEffect(() => {
    formik.values.images = img;
  }, [img]);
  const { isSuccess, isError, createdData } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    if (isSuccess && createdData) {
      toast.success("Product Added Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, createdData]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      quantity: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlog(values));
      setTimeout(() => {
        dispatch(resetState());
      }, 1000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add blog</h3>

      <div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <div className="mt-3">
            <CustomInput
              type="text"
              name="title"
              label="Enter Blog"
              onCh={formik.handleChange("title")}
              onBl={formik.handleBlur("title")}
              val={formik.values.title}
              id="blog"
            />
          </div>
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3 mb-3 mt-3"
            id=""
          >
            <option value="">Select Category</option>
            {categoryState?.map((category, index) => {
              return (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => {
              const parts = i.url.split("/");
              const public_id = parts[parts.length - 1].split(".")[0];
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0  rounded-3 my-5"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddBlog;
