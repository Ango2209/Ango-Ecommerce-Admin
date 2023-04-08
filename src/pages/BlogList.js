import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getBlogs } from "../features/blogs/blogSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
    console.log("Hey");
  }, []);

  const blogState = useSelector(
    (state) => state?.blog?.storageData?.data?.data
  );
  console.log(blogState);
  let data1 = [];
  if (blogState !== undefined) {
    data1 = blogState.map((blog, index) => ({
      key: index,
      name: blog.title,
      category: blog.category,
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
      <h3 className="mb-4 title">Blog list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};
export default BlogList;
