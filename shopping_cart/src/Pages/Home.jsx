import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../Components/Product-tile";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchListOfProducts = async () => {
    setLoading(true);
    const res = await fetch("https:fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProduct(data);
    }
  };

  useEffect(() => {
    FetchListOfProducts();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="flex min-h-screen w-full justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className=" min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {product.map((product) => {
            return <ProductTile product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
