import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createColor } from "../features/color/colorSlice";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";
let schema = Yup.object().shape({
  title: Yup.string().required("Color is Required"),
});
const AddColor = () => {
  const dispatch = useDispatch();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, createdData } = newColor;
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
      dispatch(createColor(values));
      setTimeout(() => {
        dispatch(resetState());
      });
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Color</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="color"
            name="title"
            label="Enter Product color"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="color"
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
export default AddColor;
