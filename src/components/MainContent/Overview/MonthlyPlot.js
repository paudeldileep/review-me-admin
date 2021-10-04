import React, { useEffect } from "react";
import { useFetchHelper } from "../../../utils/useFetchHelper";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import BasicLoader from "../../Utils/UI/BasicLoader";

const MonthlyPlot = () => {
  const [response, setResponse] = useFetchHelper("product/plot/monthly_pc");

  useEffect(() => {
    setResponse("product/plot/monthly_pc");
  }, []);

  console.log(response);

  return <>{!response.data ? <BasicLoader/> :<> <h2 className="text-center text-purple-900 font-bold text-lg">Monthly Products Count</h2><ResponsiveContainer width="90%" height="90%">
    <LineChart
      width={500}
      height={150}
      data={response.data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="yAxis" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="xAxis" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer></>}
  </>
};

export default MonthlyPlot;
