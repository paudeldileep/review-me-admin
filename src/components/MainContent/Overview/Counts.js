//for displaying total counts of users and products todo:products left to review

import React, { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";
import Count from "../../Helpers/Count";

import {
  faCertificate,
  faChartLine,
  faLayerGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Counts = () => {
  const [response, setResponse] = useFetchHelper("admin/count");

  useEffect(() => {
    setResponse("admin/count");
  }, []);

  //console.log(response);

  return (
    <div className="w-full h-auto flex flex-wrap items-center justify-between mx-2">
      <Count
        isLoading={response.isLoading}
        title="Active Users"
        titleIcon={faUsers}
        countValue={response.data?.totalUsers}
        contentIcon={faChartLine}
      />

      <Count
        isLoading={response.isLoading}
        title="Total Products"
        titleIcon={faLayerGroup}
        countValue={response.data?.totalProducts}
      />

      <Count
        isLoading={response.isLoading}
        title="Featured Item"
        titleIcon={faCertificate}
        countValue={response.data?.featuredProducts}
      />
    </div>
  );
};

export default Counts;
