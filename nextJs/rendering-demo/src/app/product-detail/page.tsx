import { Suspense } from "react";
// suspense로 향상시키기

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      {/* 각각 suspense로 묶기 */}
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
