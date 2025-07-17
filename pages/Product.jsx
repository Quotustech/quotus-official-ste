import React, { useEffect, useState } from 'react';
import { ProductDetails } from "../src/components/productSection/ProductDetails";
import FeatureSection from "../src/components/productSection/FeatureSection";
import { HowItWorks } from "../src/components/productSection/HowItWorks";
import { KeyBenefitsSection } from "../src/components/productSection/KeyBenefitsSection";
import { useLocation } from "react-router-dom";
import { ourProducts } from "../src/data/ProductPageData";
import Faq from "../src/components/productSection/FaqSection";
import {BookDemo} from "../src/components/productSection/BookDemo";

function Product() {
  const location = useLocation();
  const [productData, setProductData] = useState();

  useEffect(() => {
    const subPath = location.pathname.replace(/^\/product\/?/, "").toLowerCase();

    if (!subPath) {
      console.log("No subpath — you're on the main product page.");
      return;
    }

    const matchedProduct = ourProducts.find(
      (product) => product.slug.toLowerCase() === subPath
    );

    if (matchedProduct) {
      console.log("Matched product:", matchedProduct);
      setProductData(matchedProduct)
    } else {
      console.log("No matching product found for:", subPath);
    }
  }, [location.pathname]);
  
  return (
    <div>
      {!productData && (
        <div className='text-black h-screen'>Loading
        </div>
      )}

      {productData && (
        <div className='py- px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'> 

          <ProductDetails productData={productData.productHeadingSection} />
          <FeatureSection productData={productData.featureSection}/>
          {/* <HowItWorks/> */}
          <KeyBenefitsSection productData={productData.productBenefits} />
          <Faq productData={productData.faqSection}/>
          {/* <BookDemo/> */}
        </div>
      )}

    </div>
  )
}

export default Product