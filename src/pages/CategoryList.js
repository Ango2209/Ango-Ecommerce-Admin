import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../features/pcategory/pcategorySlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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

const CategoryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    console.log("Hey");
  }, []);

  const pCatStat = useSelector(
    (state) => state?.pcategory?.storageData?.data?.data
  );
  console.log(pCatStat);
  let data1 = [];
  if (pCatStat !== undefined) {
    data1 = pCatStat.map((brand, index) => ({
      key: index,
      name: brand.title,
      action: (
        <>
          <Link to="/" className="fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link to="/" className="ms-3 fs-3 text-danger">
            <AiFillDelete />
          </Link>
        </>
      ),
    }));
  }

  return (
    <div>
      <h3 className="mb-4 title">CategoryList</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};
export default CategoryList;
