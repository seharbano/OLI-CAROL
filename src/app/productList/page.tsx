"use client";

import React, { Suspense } from "react";
import ProductListContent from "@/globalComponents/section/ProductListContent";

const ProductListPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductListContent />
    </Suspense>
  );
};

export default ProductListPage;
