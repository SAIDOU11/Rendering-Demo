import React from "react";

const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1 className="font-bold font-3xl mb-4 text-green-700">Product</h1>
    </div>
  );
};

export default Product;
