import React, { Suspense } from "react";
import Product from "@/components/product";
import Reviews from "@/components/review";

const ProductDetailPage = () => {
  return (
    <div>
      <h1 className="font-bold font-3xl mb-4">Product Detail Page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
