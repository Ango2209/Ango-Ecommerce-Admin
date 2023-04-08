import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBlogCategory } from "../features/bcategory/bcategorySlice";
import { useEffect } from "react";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";
let schema = yup.object().shape({
  title: yup.string().required("Blog Category Name is Required"),
});

const AddBlogCat = () => {
  const dispatch = useDispatch();
  const newBCategory = useSelector((state) => state.bCategory);
  const { isSuccess, isError, isLoading, createdData } = newBCategory;

  useEffect(() => {
    if (isSuccess && createdData) {
      toast.success("Blog Category Added Successfully");
    }
    if (isError) {
      toast.error("Some thing went wrong");
    }
  }, [isSuccess, isError, isLoading, createdData]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlogCategory(values));
      setTimeout(() => {
        dispatch(resetState());
      }, 1000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Blog Category</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter Blog Category"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="blogCategory"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0  rounded-3 my-5"
          >
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddBlogCat;
