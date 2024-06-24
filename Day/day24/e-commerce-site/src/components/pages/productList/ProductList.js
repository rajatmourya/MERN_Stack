import "./ProductList.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import SingleProduct from "../singleProduct/SingleProduct";
import { fetchData } from "../../redux/Slices/ProductSlice";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.products);
  const status = useSelector((state) => state.ProductReducer.status);
  const error = useSelector((state) => state.ProductReducer.error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === "loading") {
    const antIcon = <LoadingOutlined start={{ fontSize: 24 }} spin />;
    return (
      <Spin
        style={{ position: "absolute", top: "40%", left: "50%" }}
        indicator={antIcon}
      />
    );
  }

  if (status === "failed") {
    return (
      <div>
        <h1>Un oh! </h1>
        <h2>Something went to wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="ProductList">
      {products.map((item) => (
        <SingleProduct key={item.id} products={item} />
        // <h3>{item.title}</h3>
      ))}
    </div>
  );
}

export default ProductList;
