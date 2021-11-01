import {
  faCalendarCheck,
  faCertificate,
  faCheck,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Count from "../../Helpers/Count";

const ProductsCount = ({ response }) => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-between mx-2">
      <Count
        isLoading={response.isLoading}
        title="Total Products"
        titleIcon={faLayerGroup}
        countValue={response.data?.totalProducts}
      />
      <Count
        isLoading={response.isLoading}
        title="Featured"
        titleIcon={faCertificate}
        countValue={response.data?.featuredProducts}
      />
      <Count
        isLoading={response.isLoading}
        title="Approved"
        titleIcon={faCheck}
        countValue={response.data?.approvedProducts}
      />
      <Count
        isLoading={response.isLoading}
        title="Pending"
        titleIcon={faCalendarCheck}
        countValue={response.data?.pendingProducts}
      />
    </div>
  );
};

export default ProductsCount;
