import CustomInput from "../components/CustomInput";
import { useFormik, validateYupSchema } from "formik";
import { createCategory } from "../features/pcategory/pcategorySlice";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";
let schema = Yup.object().shape({
  title: Yup.string().required("Category Name is Required"),
});
const AddCat = () => {
  const dispatch = useDispatch();
  const newCategory = useSelector((state) => state.pcategory);
  const { isSuccess, isError, createdData } = newCategory;
  useEffect(() => {
    if (isSuccess && createdData) {
      toast.success("Category added successfully");
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, createdData]);
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      setTimeout(() => {
        dispatch(resetState());
      }, 1000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Category</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter Category"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="category"
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
export default AddCat;
