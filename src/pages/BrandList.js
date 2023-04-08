import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { resetState } from "../features/extraReducerFactory/extraReducerFactory";
import CustomModal from "../components/CustomModal";
import { deleteABrand } from "../features/brand/brandSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BrandList = () => {
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");

  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(resetState());
  }, []);

  const brandState = useSelector(
    (state) => state?.brand?.storageData?.data?.data
  );
  let data1 = [];
  if (brandState !== undefined) {
    data1 = brandState.map((brand, index) => ({
      key: index,
      name: brand.title,
      action: (
        <>
          <Link to={`/admin/brand/${brand._id}`} className="fs-3 text-danger">
            <BiEdit />
          </Link>
          <button
            to="/"
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(brand._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    }));
  }

  const deleteBrand = (id) => {
    setOpen(false);
    dispatch(deleteABrand(id));
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">BrandList</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBrand(brandId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default BrandList;