import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createBrand,
  getABrand,
  updateABrand,
} from "../features/brand/brandSlice";
import { useEffect } from "react";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";
let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const newBrand = useSelector((state) => state.brand);
  const location = useLocation();
  const navigate = useNavigate();
  const getBrandId = location.pathname.split("/")[3];
  const { isSuccess, isError, isLoading, createdData, getAData, updatedData } =
    newBrand;
  const brandTitle = getAData?.data?.data?.title;
  useEffect(() => {
    if (getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId]);
  useEffect(() => {
    if (isSuccess && createdData) {
      toast.success("Brand Added Successfully");
    }
    if (isSuccess && updatedData) {
      toast.success("Brand Updated Successfully");
      navigate("/admin/list-brand");
    }
    if (isError) {
      toast.error("Some thing went wrong");
    }
  }, [isSuccess, isError, isLoading, createdData]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandTitle || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBrandId !== undefined) {
        const data = { id: getBrandId, brandData: values };
        dispatch(updateABrand(data));
      } else {
        dispatch(createBrand(values));
        setTimeout(() => {
          dispatch(resetState());
        }, 1000);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">
        {getBrandId !== undefined ? "Update" : "Add"} Brand
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            label="Enter Brand"
            onCh={formik.handleChange("title")}
            onBl={formik.handleBlur("title")}
            val={formik.values.title}
            id="brand"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            {getBrandId !== undefined ? "Update" : "Add"} Brand
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddBrand;
