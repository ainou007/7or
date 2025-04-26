import Section from "@/components/seection/section";
import SectionTitle from "@/components/seection/section-title";
import { products } from "@/constants/products";
import React from "react";
import Product from "../product";
import { Button } from "@/components/ui/button";

const MostPopular = () => {
  return (
    <Section>
      <div className="container">
        <SectionTitle
          title="المنتجات الأكثر طلبا"
          description="اكتشف اختيارات عملائنا المميزة! هذه المنتجات حصلت على أعلى تقييمات وأكبر عدد طلبات لما تقدمه من جودة استثنائية وفوائد لا تُضاهى."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <Button variant={"outline"}>عرض جميع المنتجات </Button>
        </div>
      </div>
    </Section>
  );
};

export default MostPopular;
